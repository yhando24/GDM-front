import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/services/mission.service';
import { Mission, User } from '../models';
import { UserService } from 'src/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vue-primes',
  templateUrl: './vue-primes.component.html',
  styleUrls: ['./vue-primes.component.css']
})
export class VuePrimesComponent implements OnInit {

  listeMissions: Mission[];

  idUser: number;

  constructor(private serviceMission: MissionService, private route: ActivatedRoute) { }

  ngOnInit() {

      this.idUser = Number(this.route.snapshot.paramMap.get('idUser'));

      this.serviceMission.findPrimeMissionByUser(this.idUser).subscribe(
      values => this.listeMissions = values,
    );

  }

}
