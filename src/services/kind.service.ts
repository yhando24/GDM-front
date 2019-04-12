import { Injectable } from '@angular/core';
import { Observable, Subject, AsyncSubject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Kind, Historic } from 'src/app/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


const URL_BACKEND = environment.backendUrl;


@Injectable({
  providedIn: 'root'
})

export class KindService {


  constructor(private http: HttpClient, private modalService: NgbModal) { }

  get oneKind(): Observable<Kind> {
    return this.kind.asObservable();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private kindd: Kind;

  private kind = new BehaviorSubject<Kind>(null);
  public checkKind = new Subject<string[]>();
  public activeKinds = new BehaviorSubject<Kind[]>(null);

  getActiveKinds() {
    this.findActived().subscribe(data => this.activeKinds.next(data)) ;
  }

  kindDeleted(kind: Kind) {
    this.checkKind.next(['success', `la nature ${kind.name}
    à bien été supprimée`]);
  }
  kindNotDeleted(message: string) {
    this.checkKind.next(['danger', message]);
  }
  kindUpdated(kind: Kind) {
    this.checkKind.next(['success', `la nature ${kind.name}
    à bien été modifiée`]);
  }

  ajoutKind(kind: Kind) {
    this.kind.next(kind);
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

    if (nouvelleNature.active == null) {
      nouvelleNature.active = false;
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
      active: nouvelleNature.active
    },
      this.httpOptions);
  }

  findAllKind(): Observable<Kind[]> {
    return this.http.get<Kind[]>(URL_BACKEND + 'kinds');
  }

  findActive(): Observable<HttpResponse<Kind[]>> {
    console.log('je afis la requete!!!!');
    return this.http.get<Kind[]>(URL_BACKEND + 'kinds/active', { observe: 'response' });
  }

  findActived(): Observable<Kind[]> {
    return this.http.get<Kind[]>(URL_BACKEND + 'kinds/active');
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
    return this.kindd;
  }

  addKind(kindd: Kind) {
    this.kindd = kindd;
  }

}
