import { Component, OnInit } from '@angular/core';
import { Mission } from '../models';
import { MissionService } from 'src/services/mission.service';

@Component({
  selector: 'app-modal-update-mission',
  templateUrl: './modal-update-mission.component.html',
  styleUrls: ['./modal-update-mission.component.css']
})
export class ModalUpdateMissionComponent implements OnInit {

  oneMission: Mission;

  constructor(private data: MissionService) { }

  ngOnInit() {
    this.data.oneMission.subscribe(mission => this.oneMission = mission);
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
