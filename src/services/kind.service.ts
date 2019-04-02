import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, map } from 'rxjs/operators';
import { User, Kind } from 'src/app/models';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class KindService {

  constructor(private _http: HttpClient) { }


  createKind(nouvelleNature: Kind): Observable<Kind> {
    return this._http.post<Kind>(URL_BACKEND + '/kinds', nouvelleNature);
  }


}
