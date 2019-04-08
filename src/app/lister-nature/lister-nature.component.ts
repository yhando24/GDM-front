import { Component, OnInit, Input } from '@angular/core';
import { KindService } from 'src/services/kind.service';
import { Kind } from '../models';
import { NgbModal, NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private data: KindService, private modalService: NgbModal, config: NgbModalConfig, private router: Router, private modal: ModalService) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.data.findAllKind()
      .subscribe(arg => (this.listeKinds = arg));
  }

  submit() {
    this.modalService.dismissAll();
    this.data.updateKind(this.oneKind).subscribe(value => value,
      error => console.log(`l'update n'a pas eu lieu` + error.error));
  }

  delete(kind: Kind) {
    console.log(kind);
    this.modalService.dismissAll();
    this.data.deleteKind(kind.id).subscribe(value => this.ngOnInit(),
      error => console.log(`la suppression a échoué` + error.error));
  }

  openUpdate(content: string, kind: Kind) {
    this.oneKind = kind;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(() => {
        this.data.updateKind(this.oneKind).subscribe(arg => (this.oneKind = arg));
        console.log(this.oneKind);
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  openDelete(content: string, kind: Kind) {
    this.oneKind = kind;
    this.modalService.open(content);
    //this.data.deleteKind(this.oneKind).subscribe(arg => (this.oneKind = arg));
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
    this.modal.openModal('historicKind');
  }
}

