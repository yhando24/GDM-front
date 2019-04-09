import { Component, OnInit } from '@angular/core';
import { Mission } from '../models';
import { MissionService } from 'src/services/mission.service';
import { Route, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-lister-missions',
  templateUrl: './lister-missions.component.html',
  styleUrls: ['./lister-missions.component.css']
})
export class ListerMissionsComponent implements OnInit {

  listeMission: Mission[];

  constructor(private data: MissionService, private route: Router) { }
  newMission(){
    this.route.navigate(['/createMission']);
  }

  ngOnInit() {
    this.data.finAllMission().subscribe(arg => (
      this.listeMission = arg
    ));

  }

}
