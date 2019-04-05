import { Injectable } from '@angular/core';
import { User, token } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from "moment";
import { tap } from 'rxjs/operators';
import { Logeur } from 'src/app/connection-user/connection-user.component';
import { Observable, of, from, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private subject = new Subject<any>();

  authenticated: boolean = false;
  current_User: User;

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
    this.router.navigateByUrl('/login');
    this.authenticated = false;

  }
  get isAuthenticated(): boolean{
    return this.authenticated;
  }
  get currentUser() :Promise<User> | null{
    const helper = new JwtHelperService();
    const idToken = localStorage.getItem("id_token");
    if (idToken != null){
    const email = helper.decodeToken(idToken).sub;
    this.authenticated = true;
    const URL_BACKEND = environment.backendUrl;
    if (this.current_User === null || this.current_User === undefined){


      return this.http.get<User>(URL_BACKEND + 'login/?email=' + email).toPromise();

    }else{
      return of(this.current_User).toPromise();
    }
    } return null;
  }
}
