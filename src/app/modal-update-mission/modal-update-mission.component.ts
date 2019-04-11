import { Component, OnInit } from '@angular/core';
import { Mission, Kind, TransportEnum, getTransportEnum } from '../models';
import { MissionService } from 'src/services/mission.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-update-mission',
  templateUrl: './modal-update-mission.component.html',
  styleUrls: ['./modal-update-mission.component.css']
})
export class ModalUpdateMissionComponent implements OnInit {
  kinds: Kind[] = [];
  oneMission: Mission;
  listEnum: TransportEnum[] = getTransportEnum();

  constructor(private data: MissionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.data.oneMission.subscribe(mission => this.oneMission = mission, ({ kinds }) => {
      this.kinds = kinds, this.listEnum = getTransportEnum();
    });
  }

  close() {
    this.data.closeModal();
  }

  submit() {
    this.data.updateMission(this.oneMission).subscribe(
      mission => this.data.missionUpdated(mission),
      error => console.log(error.error)
    );
    this.data.closeModal();
  }
}
