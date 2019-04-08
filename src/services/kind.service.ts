import { Injectable } from '@angular/core';
import { Observable, Subject, AsyncSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Kind, Historic } from 'src/app/models';

const URL_BACKEND = environment.backendUrl;


@Injectable({
  providedIn: 'root'
})

export class KindService {

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private kind: Kind;

  createKind(nouvelleNature: Kind): Observable<Kind> {

    if (nouvelleNature.invoiced == null) {
      nouvelleNature.invoiced = false;
    }

    if (nouvelleNature.bonus == null) {
      nouvelleNature.bonus = false;
    }

    if (nouvelleNature.authorizationToExceed == null) {
      nouvelleNature.authorizationToExceed = false;
    }

    if (nouvelleNature.bonusPercentage == null) {
      nouvelleNature.bonusPercentage = 0;
    }

    nouvelleNature.updatedAt = new Date();
    console.log(nouvelleNature);
    return this.http.post<Kind>(URL_BACKEND + 'kinds', {
      name: nouvelleNature.name,
      adr: nouvelleNature.adr,
      bonusPercentage: nouvelleNature.bonusPercentage,
      updatedAt: nouvelleNature.updatedAt,
      invoiced: nouvelleNature.invoiced,
      bonus: nouvelleNature.bonus,
      dailyCharges: nouvelleNature.dailyCharges,
      authorizationToExceed: nouvelleNature.authorizationToExceed,

    },
      this.httpOptions);
  }

  findAllKind(): Observable<Kind[]> {
    return this.http.get<Kind[]>(URL_BACKEND + 'kinds');
  }

  findKindHistoric(id: number): Observable<Historic[]> {
    return this.http.get<Historic[]>(URL_BACKEND + 'kinds/historic/' + id);
  }

  getById(id: number): Observable<Kind> {
    return this.http.get<Kind>(URL_BACKEND + 'kinds');
  }

  updateKind(kind: Kind): Observable<Kind> {
    console.log(kind);
    return this.http.patch<Kind>(URL_BACKEND + 'kinds', kind, this.httpOptions);
  }

  deleteKind(id: number): Observable<void> {
    console.log(id);
    return this.http.delete<void>(URL_BACKEND + 'kinds/deleteKind/' + id, this.httpOptions);
  }

  getKind(): Kind {
    return this.kind;
  }

  addKind(kind: Kind) {
    this.kind = kind;
  }
}
