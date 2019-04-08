import { Component, OnInit, Input } from '@angular/core';
import { KindService } from 'src/services/kind.service';
import { Kind } from '../models';
import { NgbModal, NgbModalConfig, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ModalService } from 'src/services/modal.service';


@Component({
  selector: 'app-lister-nature',
  templateUrl: './lister-nature.component.html',
  styleUrls: ['./lister-nature.component.css']
})

export class ListerNatureComponent implements OnInit {

  listeKinds;
  oneKind: Kind;
  titreModal: string;
  messageModal: string;
  footerModal: string;
  closeResult: string;

  constructor(private data: KindService, private modalService: ModalService, config: NgbModalConfig, private router: Router) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.data.findAllKind()
      .subscribe(arg => (this.listeKinds = arg));
  }

  submit() {
   // this.modalService.dismissAll();
    this.data.updateKind(this.oneKind).subscribe(value => value,
      error => console.log(`l'update n'a pas eu lieu` + error.error));
  }

  delete(kind: Kind) {
    console.log(kind);
   // this.modalService.dismissAll();
    this.data.deleteKind(kind.id).subscribe(value => this.ngOnInit(),
      error => console.log(`la suppression a échoué` + error.error));
  }

  openUpdate(kind: Kind) {

     // this.data.addKind(kind);
      this.modalService.openModal('update-kind');

  }

  openDelete(kind: Kind) {
    this.data.addKind(kind);
    this.modalService.openModal('deleteKind');
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  goToHistoric(kind: Kind) {
    this.data.addKind(kind);
    this.modal.openModal('historicKind', { size: 'lg' });
  }
}

