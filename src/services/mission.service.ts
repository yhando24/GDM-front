import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Mission, ModelMissionCalendar, IMission } from 'src/app/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class MissionService {

  kinds(data: MissionService, arg1: { kinds: any; }, kinds: any): Observable<import("../app/models").Kind>[] {
    throw new Error("Method not implemented.");
  }

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  get oneMission(): Observable<Mission> { return this.mission.asObservable(); }

  FindMissionById(id: number): Observable<Mission> {
    return this.http.get<Mission>(this.URL_BACKEND + '/findById/' + id);
  }

  URL_BACKEND = environment.backendUrl +'missions';

  private mission = new BehaviorSubject<Mission>(null);
  public checkMission = new Subject<string[]>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  missionDeleted(m: IMission) {
    this.checkMission.next(['success', `la mission ${m.kind.name} du ${m.startDate}
    à bien été supprimé`]);
  }
  missionNotDeleted(message: string) {
    this.checkMission.next(['danger', message]);
  }
  missionUpdated(mission: IMission) {
    this.checkMission.next(['success', `la mission ${mission.kind.name} du ${mission.startDate}
    à bien été modifiée`]);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  finAllMission(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND);
  }

  finAllMissionByUser(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND + '/perso');
  }

  addMission(mission: Mission) {
    this.mission.next(mission);
  }

  deleteOneMission(m: Mission): Observable<Mission> {
    return this.http
      .delete(this.URL_BACKEND + '/delete/' + m.id, this.httpOptions);
  }
  createOneMission(m: Mission): Observable<Mission> {
    return this.http
      .post(this.URL_BACKEND, m, this.httpOptions);
  }

  updateMission(mission: Mission): Observable<Mission> {
    return this.http.patch<Mission>(this.URL_BACKEND + '/update', mission, this.httpOptions);
  }

  finAllMissionToApprove(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND + '/waiting');
  }

  finAllMissionForManager(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND + '/display-all');
  }

  approveOneMission(m: Mission): Observable<Mission> {
    return this.http.patch<Mission>(this.URL_BACKEND, m, this.httpOptions);
  }

  findPrimeMissionByUser(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND + '/primes/');
  }

  criteriaMission( mois: number, annee: number): Observable<Mission[]> {
      return this.http.get<Mission[]>(this.URL_BACKEND + '/criteria?month=' + mois + '&year=' + annee);
  }
  criteriaMissionUser(mois: number, annee: number, user): Observable<Mission[]> {
      return this.http.post<Mission[]>(this.URL_BACKEND + '/criteria?month=' + mois + '&year=' + annee,
      user, this.httpOptions);
  }
  finAllMissionFordownload(): Observable<Mission[]>{
    console.log('jexporte')
    return this.http.get<Mission[]>(this.URL_BACKEND + '/export');
  }

  findById(id: number): Observable<Mission> {
    return this.http.get<Mission>(this.URL_BACKEND + '/findById/' + id);
  }
}
