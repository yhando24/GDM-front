import { Injectable } from '@angular/core';
import { User, token } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  authenticated = false;
  public current_User = new BehaviorSubject<User>({email: '', firstName: '', role: null, lastName: ''});
  public current_Role = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<token> {

    const URL_BACKEND = environment.backendUrl;
    return this.http.post<token>(URL_BACKEND + 'login', { email, password })
      .pipe(tap(res => this.setSession(res)));

  }

  private setSession(authResult) {
    localStorage.setItem('id_token', authResult.idToken);
    this.authenticated = true;

  }

  logout() {
    localStorage.removeItem('id_token');
    this.authenticated = false;
  }

  get isAuthenticated(): boolean{
    const helper = new JwtHelperService();
    const idToken = localStorage.getItem('id_token');

    if (!helper.isTokenExpired(idToken)) {

       return true;
    } else {
      return false;
    }
  }

   currentUser() {
      const helper = new JwtHelperService();
      const idToken = localStorage.getItem('id_token');
      if (idToken != null) {
        const email = helper.decodeToken(idToken).sub;
        const role = helper.decodeToken(idToken).auth;
        this.current_Role.next(role.toUpperCase());
        this.authenticated = true;
        const URL_BACKEND = environment.backendUrl;
        this.http.get<User>(URL_BACKEND + 'login/?email=' + email).subscribe(user => {
        this.current_User.next(user);
      });
    }
  }
}

