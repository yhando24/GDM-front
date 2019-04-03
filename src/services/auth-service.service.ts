import { Injectable } from '@angular/core';
import { User, token } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from "moment";
import { tap } from 'rxjs/operators';
import { Logeur } from 'src/app/connection-user/connection-user.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string) : Observable<token> {

    const URL_BACKEND = environment.backendUrl;
    return this.http.post<token>(URL_BACKEND+'login', { email, password })
      .pipe(tap(res => this.setSession(res)));
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }



}
