import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kind, Mission, getTransportEnum, TransportEnum } from '../models';
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
  transport: TransportEnum[] = getTransportEnum();

  constructor(private http: HttpClient, private route: ActivatedRoute, private dataMission: MissionService) { }
  URL_BACKEND = environment.backendUrl + 'users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  ngOnInit() {
    console.log("Je suis dans le TS de base !!!")
    this.route.data.subscribe(({kinds}) => this.kinds = kinds);
    }
submit(){
  this.dataMission.createMission(this.mission);
}

}
