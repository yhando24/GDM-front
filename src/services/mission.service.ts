import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Mission } from 'src/app/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  get oneMission(): Observable<Mission> {
    return this.mission.asObservable();
  }

  URL_BACKEND = environment.backendUrl + 'missions';

  private mission = new BehaviorSubject<Mission>(null);
  public checkMission = new BehaviorSubject<string[]>(null);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  missionDeleted(m: Mission) {
    this.checkMission.next(['success', `la mission ${m.kind.name} du ${m.startDate}
    à bien été supprimé`]);
  }
  missionNotDeleted(message: string) {
    this.checkMission.next(['danger', message]);
  }
  missionUpdated(mission: Mission) {
    this.checkMission.next(['success', `la mission ${mission.kind.name} du ${mission.startDate}
    à bien été modifiée`]);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  finAllMission(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND);
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

    return this.http.patch<Mission>(this.URL_BACKEND + '/update/' + mission, this.httpOptions);
  }
  finAllMissionToApprove(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND + '/waiting');
  }
  approveOneMission(m: Mission): Observable<Mission> {
    return this.http.patch<Mission>(this.URL_BACKEND, m , this.httpOptions);
  }

  findMissionByUser(id: number): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND + '/' + id) ;
  }

}
