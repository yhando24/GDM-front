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

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  createKind(nouvelleNature: Kind): Observable<Kind> {

    if ( nouvelleNature.invoiced == null) {
      nouvelleNature.invoiced = false;
    }

    if ( nouvelleNature.bonus == null ) {
      nouvelleNature.bonus = false;
    }

    if ( nouvelleNature.authorizationToExceed == null ) {
      nouvelleNature.authorizationToExceed = false;
    }

    if ( nouvelleNature.bonusPercentage == null ) {
      nouvelleNature.bonusPercentage = 0;
    }

    nouvelleNature.updatedAt = new Date() ;
    console.log(nouvelleNature);
    return this.http.post<Kind>(URL_BACKEND + 'kinds',  {
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
    return this.http.get<Kind[]>(URL_BACKEND + 'kind');
  }

  updateKind(kind: Kind): Observable<Kind> {

    return this.http.put<Kind>(URL_BACKEND + 'kind', {

      'name': kind.name,
      'adr': kind.adr,
      'bonusPercentage': kind.bonusPercentage,
      'updatedAt': kind.updatedAt,
      'invoiced': kind.invoiced,
      'bonus': kind.bonus,
      'dailyCharges': kind.dailyCharges,
      'authorizationToExceed': kind.authorizationToExceed,
    });
  }
}