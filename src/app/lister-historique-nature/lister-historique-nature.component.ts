import { Component, OnInit } from '@angular/core';
import { KindService } from 'src/services/kind.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lister-historique-nature',
  templateUrl: './lister-historique-nature.component.html',
  styleUrls: ['./lister-historique-nature.component.css']
})
export class ListerHistoriqueNatureComponent implements OnInit {

  listeHistoricKinds;

  constructor(private service: KindService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // récupération du paramètre id
       const id = Number(params.get('id'));
       console.log(id);
       this.service.findKindHistoric(id).subscribe(
        values => this.listeHistoricKinds = values ,
        error => console.log(error),
      );

    });
  }

}
