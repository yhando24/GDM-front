import { Component, OnInit } from '@angular/core';
import { KindService } from 'src/services/kind.service';

@Component({
  selector: 'app-lister-historique-nature',
  templateUrl: './lister-historique-nature.component.html',
  styleUrls: ['./lister-historique-nature.component.css']
})
export class ListerHistoriqueNatureComponent implements OnInit {

  listeHistoricKinds;

  constructor(private service: KindService) { }

  ngOnInit() {
    /*this.service.findKindHistoric()
    .subscribe(values => (this.listeHistoricKinds = values));*/
  }

}
