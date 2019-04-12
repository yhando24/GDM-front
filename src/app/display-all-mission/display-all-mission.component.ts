import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/services/mission.service';
import { Mission, getMonthOfYear, Month, Year, User } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Kind } from 'src/app/models';

import { getYears } from './../models';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-display-all-mission',
  templateUrl: './display-all-mission.component.html',
  styleUrls: ['./display-all-mission.component.css']
})

export class DisplayAllMissionComponent implements OnInit {
listeMission: Mission[];
listeMois: Month[];
listeNatures: Kind[];
listeAnnees: Year[];
listeUsers: User[];
nature: string;
mois: number;
annee: number;
user: User|number;
  constructor(private userServ: UserService, private route: ActivatedRoute, private missionServ: MissionService) { }

  ngOnInit() {
    const date = new Date();
    this.mois = 0;
    this.annee = 0;
    this.user = 0;
    this.listeAnnees = getYears();
    this.listeMois = getMonthOfYear();
    this.missionServ.finAllMissionForManager().subscribe(arg => (
      this.listeMission = arg
    ));
    this.route.data.subscribe(({ kinds }) => {
      this.listeNatures = kinds;
    });
    this.userServ.userWithMission().subscribe(liste => this.listeUsers = liste)
  }
  submit() {
    if (this.mois === 0 && this.annee === 0 && this.user === 0) {
      this.missionServ.finAllMissionForManager().subscribe(arg => (this.listeMission = arg));
    }
    if ((this.mois !== 0 && this.annee !== 0 && this.user === 0) || (this.mois === 0 && this.annee === 0 && this.user === 0)) {
      this.missionServ.criteriaMission(this.mois, this.annee).subscribe(list => this.listeMission = list);
    }
    if (this.mois !== 0 && this.annee !== 0 && this.user !== 0) {
      this.missionServ.criteriaMissionUser(this.mois, this.annee, this.user).subscribe(list => this.listeMission = list);
    }
  }
}
