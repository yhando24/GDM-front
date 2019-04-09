import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kind, Mission } from '../models';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.css']
})
export class CreateMissionComponent implements OnInit {
  kinds: Kind;
  mission : Mission;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  URL_BACKEND = environment.backendUrl + 'users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  ngOnInit() {
    this.route.data.subscribe((data: { kinds: Kind }) => this.kinds = data.kinds);
  }

  createUser(mission: Mission): Observable<Mission> {
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
