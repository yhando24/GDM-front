import { Injectable } from '@angular/core';
import { Observable, Subject, AsyncSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Kind } from 'src/app/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


const URL_BACKEND = environment.backendUrl;


@Injectable({
  providedIn: 'root'
})

export class KindService {
  oneKind: any;

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private user = new AsyncSubject<Kind>();
  public checkKind = new AsyncSubject<string>();

  kindDeleted(kind: Kind) {
    this.checkKind.next(`la nature ${kind.name}
    à bien été supprimé`);
    this.checkKind.complete();
  }
  kindUpdated(kind: Kind) {
    this.checkKind.next(`la nature ${kind.name}
    à bien été modifiée`);
    this.checkKind.complete();
  }

  addUser(kind: Kind) {
    this.user.next(kind);
    this.user.complete();
  }

  closeModal() {
    this.modalService.dismissAll();
  }

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

  findKindHistoric(id: number): Observable<Kind[]> {
    return this.http.get<Kind[]>(URL_BACKEND + 'kinds/historic/' + id);
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
}
