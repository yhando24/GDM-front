import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/services/mission.service';
import { Mission } from '../models';

@Component({
  selector: 'app-approve-mission',
  templateUrl: './approve-mission.component.html',
  styleUrls: ['./approve-mission.component.css']
})
export class ApproveMissionComponent implements OnInit {
  missions: Mission[] = [];
  constructor(private missionServ: MissionService) { }

  ngOnInit() {
    this.missionServ.finAllMissionToApprove().subscribe(miss =>  this.missions = miss);
  }

  valider(m) {
    m.missionStatus = 'VALIDE';
    this.missionServ.approveOneMission(m).subscribe(mission => { m = mission,
      this.missionServ.finAllMissionToApprove().subscribe(miss => this.missions = miss);
      });
  }
  rejeter(m) {
    m.missionStatus = 'REJETE';
    this.missionServ.approveOneMission(m).subscribe(mission => { m = mission,
      this.missionServ.finAllMissionToApprove().subscribe(miss => this.missions = miss);
      });
  }
}
