import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/services/mission.service';
import { Mission } from '../models';

@Component({
  selector: 'app-display-all-mission',
  templateUrl: './display-all-mission.component.html',
  styleUrls: ['./display-all-mission.component.css']
})
export class DisplayAllMissionComponent implements OnInit {
listeMission: Mission[];
  exportExcelUrl: string;
  constructor(private missionServ: MissionService) { }

  ngOnInit() {
    this.exportExcelUrl = "http://localhost:8080/missions/export?Authorization=Bearer%20"+ "azezaeza";

    this.missionServ.finAllMissionForManager().subscribe(arg => (
      this.listeMission = arg
    ));
  }
  dlMission() {
    this.missionServ.finAllMissionFordownload().subscribe(arg => (
      console.log(arg)
    ));
  }
}

