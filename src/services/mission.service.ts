import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Mission } from 'src/app/models';


@Injectable({
  providedIn: 'root'
})
export class MissionService {
  URL_BACKEND = environment.backendUrl + 'missions';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  finAllMission(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.URL_BACKEND);
  }

  createMission(mission: Mission): Observable<Mission> {
    return this.http.post<Mission>(
      this.URL_BACKEND,
      {
        startDate: mission.startDate,
        endDate: mission.endDate,
        departureCity: mission.departureCity,
        arrivalCity: mission.arrivalCity,
        prime: mission.prime,
        transportEnum: mission.transportEnum,
        kind: mission.kind,
      },
      this.httpOptions
    );
  }
}
