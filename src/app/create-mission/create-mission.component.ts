import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kind, Mission, TransportEnum, getTransportEnum } from '../models';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KindsResolver } from '../lister-nature/lister-nature.route';
import { MissionService } from 'src/services/mission.service';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.css']
})
export class CreateMissionComponent implements OnInit {
  kinds: Kind[] = [];
  mission: Mission = {};
  transport: TransportEnum[] = [] ;

  constructor(private http: HttpClient, private route: ActivatedRoute, private missionServ: MissionService) { }
  URL_BACKEND = environment.backendUrl + 'users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  ngOnInit() {
    this.route.data.subscribe(({kinds}) => { this.kinds = kinds,
      this.transport = getTransportEnum(); });


    }
submit() {
  this.missionServ.createOneMission(this.mission).subscribe();
}

}
