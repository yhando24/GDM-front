import { Component, OnInit } from '@angular/core';
import { Mission } from '../models';
import { MissionService } from 'src/services/mission.service';
import { Router } from '@angular/router';

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
  modifer(){
  console.log("Je me modifie")
}
supprimer(){
  console.log("Je me supprime")
}
noteDeFrais(){
  console.log("Je suis une note de frais!")
}
}
