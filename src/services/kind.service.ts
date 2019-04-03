import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, map } from 'rxjs/operators';
import { Kind } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})

export class KindService {

  constructor(private http: HttpClient) { }


  createKind(nouvelleNature: Kind): Observable<Kind> {
    console.log(nouvelleNature);
    return null;
    //return this.http.post<Kind>(URL_BACKEND + 'kinds', nouvelleNature);
  }

  findAllKind(): Observable<Kind[]> {
    const URL_BACKEND = environment.backendUrl + 'kinds';
    return this.http.get<Kind[]>(URL_BACKEND);
  }

  getById(id: number): Observable<Kind> {
    const URL_BACKEND = environment.backendUrl + 'kinds';
    return this.http.get<Kind>(URL_BACKEND);
  }

  updateKind(kind: Kind): Observable<Kind> {
    const URL_BACKEND = environment.backendUrl + 'kinds';
    return this.http.put<Kind>(URL_BACKEND, {

      name: kind.name,
      adr: kind.adr,
      bonusPercentage: kind.bonusPercentage,
      updatedAt: kind.updatedAt,
      invoiced: kind.invoiced,
      bonus: kind.bonus,
      dailyCharges: kind.dailyCharges,
      authorizationToExceed: kind.authorizationToExceed,
    });
  }

  deleteKind(kind: Kind): Observable<Kind> {
    const URL_BACKEND = environment.backendUrl + 'kind';
    return this.http.delete<Kind>(URL_BACKEND);
  }
}
