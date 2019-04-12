import { Component, OnInit, OnDestroy } from '@angular/core';
import { Mission, Kind } from '../models';
import { MissionService } from 'src/services/mission.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ModalService } from 'src/services/modal.service';
import { Subscription } from 'rxjs';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-lister-missions',
  templateUrl: './lister-missions.component.html',
  styleUrls: ['./lister-missions.component.css']
})


export class ListerMissionsComponent implements OnInit, OnDestroy {


  alertSubscribe: Subscription;

  kinds: Kind[] = [];
  listeMission: Mission[];
  alert: Alert;

  constructor(private data: MissionService, private route: Router, private modal: ModalService, private road: ActivatedRoute) { }
  newMission() {
    this.route.navigate(['/createMission']);
  }

  listExpenseAccount(id: number) {
    this.route.navigate(['/listExpenseAccount/'+ id]);
  }

  ngOnInit() {
    this.road.data.subscribe(({ kinds }) => this.kinds = kinds);
    this.alert = { type: '', message: '' };
    this.data.finAllMissionByUser().subscribe(arg => (
      this.listeMission = arg
    ));

    this.alertSubscribe = this.data.checkMission.subscribe(message => {
      if (message !== null) {
        this.alert.message = message[1],
          this.alert.type = message[0];
      }
      setTimeout(() => {
        this.alert.message = '',
          this.alert.type = '';

      }, 2000);
      this.data
        .finAllMission()
        .subscribe(arg => (this.listeMission = arg));
    });
  }

  delete(m: Mission) {
    this.data.addMission(m);
    this.modal.openModal('deleteMission');
  }

  openUpdate(mission: Mission) {
    this.data.addMission(mission);
    this.modal.openModal('updateMission');
  }

  ngOnDestroy(): void {
    this.data.checkMission.next([]);
  }

  noteDeFrais() {
    console.log('Je suis une note de frais!');
  }
}
