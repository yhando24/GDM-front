import { Component, OnInit } from '@angular/core';
import { Mission, Kind, TransportEnum, getTransportEnum } from '../models';
import { MissionService } from 'src/services/mission.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { KindService } from 'src/services/kind.service';


@Component({
  selector: 'app-modal-update-mission',
  templateUrl: './modal-update-mission.component.html',
  styleUrls: ['./modal-update-mission.component.css']
})
export class ModalUpdateMissionComponent implements OnInit {

  listKinds: Kind[] = [];
  oneMission: Mission;
  listEnum: TransportEnum[] = getTransportEnum();

  constructor(private data: MissionService, private route: ActivatedRoute , private kindServ: KindService) { }

  ngOnInit() {
    this.kindServ.getActiveKinds();
    this.kindServ.activeKinds.subscribe(kinds => this.listKinds = kinds);
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
