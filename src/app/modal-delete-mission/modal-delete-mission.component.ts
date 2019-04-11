import { MissionService } from 'src/services/mission.service';
import { Component, OnInit } from '@angular/core';
import { Mission } from '../models';

@Component({
  selector: 'app-modal-delete-mission',
  templateUrl: './modal-delete-mission.component.html',
  styleUrls: ['./modal-delete-mission.component.css']
})
export class ModalDeleteMissionComponent implements OnInit {
  missionDeleted: Mission;
  constructor(private ms: MissionService) {  }

  ngOnInit() {
   this.ms.oneMission.subscribe(m =>{
    this.missionDeleted = m;
   });
  }
  close() {
    this.ms.closeModal();
  }
  delete() {
    this.ms.deleteOneMission(this.missionDeleted).subscribe(
      () => this.ms.missionDeleted(this.missionDeleted),
      error => this.ms.missionNotDeleted(error.error)
    );
    this.ms.closeModal();

  }

}
