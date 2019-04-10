import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
import { Observable, Subject, BehaviorSubject } from 'rxjs';
>>>>>>> ed0e882f81441a56959982a34901d94bffcb4b24
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Mission } from 'src/app/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class MissionService {

  URL_BACKEND = environment.backendUrl + 'missions';

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  get oneMission(): Observable <Mission>{
    return this.mission.asObservable();
  }

  private mission = new BehaviorSubject<Mission>(null);
  public checkMission = new BehaviorSubject<string[]>(null);

  missionDeleted(m: Mission) {
    this.checkMission.next(['success', `la mission ${m.kind.name} du ${m.startDate}
    à bien été supprimé`]);
  }
  missionNotDeleted(message: string) {
    this.checkMission.next(['danger', message]);
  }
  closeModal() {
    this.modalService.dismissAll();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  finAllMission(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND);
  }
<<<<<<< HEAD
  finAllMissionToApprove(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND + '/waiting');
  }
  approveOneMission(m: Mission): Observable<Mission> {
    return this.http.patch<Mission>(this.URL_BACKEND, m, this.httpOptions);
=======

  addMission(m: Mission) {
    this.mission.next(m);
  }

  deleteOneMission(m: Mission): Observable<Mission> {
    return this.http
      .delete(this.URL_BACKEND + '/delete/' + m.id, this.httpOptions);
>>>>>>> ed0e882f81441a56959982a34901d94bffcb4b24
  }
}
