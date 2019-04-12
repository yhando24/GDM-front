import { Injectable } from '@angular/core';
import { Observable, AsyncSubject, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from 'src/app/models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private modalService: NgbModal) {}

  get oneUser(): Observable<User> {
    return this.user.asObservable();
  }


  URL_BACKEND = environment.backendUrl + 'users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private user = new BehaviorSubject<User>(null);
  public checkUser = new Subject<string[]>();

  userDeleted(user: User) {
    this.checkUser.next(['success', `l'utilistateur ${user.lastName} ${user.firstName}
    à bien été supprimé`]);
  }
  userNotDeleted(message: string) {
    this.checkUser.next(['danger', message]);
  }
  userUpdated(user: User) {
    this.checkUser.next(['success', `l'utilistateur ${user.lastName} ${user.firstName}
    à bien été modifié`]);
  }

  addUser(user: User) {
    this.user.next(user);
  }
  closeModal() {
    this.modalService.dismissAll();
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
    return this.http
      .delete(this.URL_BACKEND + '/delete/' + user.id, this.httpOptions);
  }
  userWithMission(): Observable<User[]> {
    return this.http.get<User[]>(this.URL_BACKEND + '/withMission/');
  }

}
