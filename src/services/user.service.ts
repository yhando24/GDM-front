import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL_BACKEND = environment.backendUrl + 'users';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private oneUser = new Subject<User>();

  get user(): Observable<User> {
    return this.oneUser.asObservable();
  }

  addOneUser(user: User) {
    this.oneUser.next(user);
  }

  finAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.URL_BACKEND);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.URL_BACKEND,
      {
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        email: user.email,
        role: user.role
      },
      this.httpOptions
    );
  }

  saveOneUser(user: User): Observable<User> {
    return this.http.patch<User>(
      this.URL_BACKEND,
      {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        email: user.email,
        role: user.role
      },
      this.httpOptions
    );
  }

  deleteOneUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.URL_BACKEND + '/delete',
      {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        email: user.email,
        role: user.role
      },
      this.httpOptions
    );
  }
}
