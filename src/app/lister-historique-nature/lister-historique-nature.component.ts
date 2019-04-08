import { Component, OnInit } from '@angular/core';
import { KindService } from 'src/services/kind.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ModalService } from 'src/services/modal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Kind } from '../models';

@Component({
  selector: 'app-lister-historique-nature',
  templateUrl: './lister-historique-nature.component.html',
  styleUrls: ['./lister-historique-nature.component.css']
})
export class ListerHistoriqueNatureComponent implements OnInit {

  erreur: string;
  listeHistoricKinds;

  constructor(private service: KindService, private modalNgb: NgbModal) { }

  /* ngOnInit() {
    const kind: Kind = this.service.getKind();

    this.service.findKindHistoric(kind.id).subscribe(
      values => this.listeHistoricKinds = values,
      error => this.erreur = error.error.message
    );

  } */

  close() {
    this.modalNgb.dismissAll();
  }
}
