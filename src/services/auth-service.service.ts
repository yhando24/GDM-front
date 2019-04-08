import { Injectable } from '@angular/core';
import { User, token } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from "moment";
import { tap } from 'rxjs/operators';
import { Logeur } from 'src/app/connection-user/connection-user.component';
import { Observable, of, from, Subject, AsyncSubject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {



  authenticated: boolean = false;
  public current_User = new BehaviorSubject <User>(null);

  constructor(private http: HttpClient, private router: Router) { }
  login(email: string, password: string) : Observable<token> {

    const URL_BACKEND = environment.backendUrl;
    return this.http.post<token>(URL_BACKEND+'login', { email, password })
      .pipe(tap(res => this.setSession(res)));

  }

  private setSession(authResult) {

    localStorage.setItem('id_token', authResult.idToken);
    this.authenticated = true;
  }

  logout() {
    localStorage.removeItem("id_token");
    this.current_User =null;

    this.authenticated = false;

  }
  get isAuthenticated(): boolean{
    const helper = new JwtHelperService();
    const idToken = localStorage.getItem("id_token");

    if (!helper.isTokenExpired(idToken)){

       return true;
    }else{
      return false;
    }
  }

   currentUser(){
      const helper = new JwtHelperService();
      const idToken = localStorage.getItem("id_token");
      if (idToken != null) {
        const email = helper.decodeToken(idToken).sub;
        this.authenticated = true;
        const URL_BACKEND = environment.backendUrl;



        this.http.get<User>(URL_BACKEND + 'login/?email=' + email).subscribe(user =>{
        this.current_User.next(user)

      });
    }
  }
}

