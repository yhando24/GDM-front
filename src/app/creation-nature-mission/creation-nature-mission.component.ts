import { Component, OnInit } from '@angular/core';
import { KindService } from 'src/services/kind.service';
import { Router } from '@angular/router';
import { Kind } from '../models';

@Component({
  selector: 'app-creation-nature-mission',
  templateUrl: './creation-nature-mission.component.html',
  styleUrls: ['./creation-nature-mission.component.css']
})
export class CreationNatureMissionComponent implements OnInit {

  error: string;
  nouvelleNature: Kind = {};

  constructor(private serviceKind: KindService, private router: Router) { }

  ngOnInit() {
  }

  submit(){
    this.serviceKind.createKind(this.nouvelleNature).subscribe(
      value => this.router.navigateByUrl('kinds'),
      error => this.error = error
    );
  }

  cancel(){
    this.router.navigateByUrl('kinds');
  }
}
