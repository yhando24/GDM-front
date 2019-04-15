import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kind, Mission, TransportEnum, getTransportEnum } from '../models';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { MissionService } from 'src/services/mission.service';
interface Alert {
  type: string;
  message: string;
}
@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.css']
})
export class CreateMissionComponent implements OnInit {
  kinds: Kind[] = [];
  mission: Mission = {};
  transport: TransportEnum[] = [];
  alert: Alert = { type: '', message: '' };
  constructor(private route: ActivatedRoute, private router: Router, private missionServ: MissionService) { }
  URL_BACKEND = environment.backendUrl + 'users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  ngOnInit() {
    this.route.data.subscribe(({ kinds }) => {
      this.kinds = kinds;
      this.transport = getTransportEnum();
    });
  }
  cancel(){
    this.router.navigateByUrl('missions')
  }
  submit() {
    this.missionServ.createOneMission(this.mission).subscribe(
      () => this.router.navigateByUrl('missions'),
    error => {
      this.alert.type = 'danger';
      this.alert.message = error.error;
     });
  }

}
