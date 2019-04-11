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

  constructor(private missionServ: MissionService) { }

  ngOnInit() {
    this.missionServ.finAllMissionForManager().subscribe(arg => (
      this.listeMission = arg
    ));
  }

}
