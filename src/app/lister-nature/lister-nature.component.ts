import { Component, OnInit, Input } from '@angular/core';
import { KindService } from 'src/services/kind.service';
import { Kind } from '../models';
import { NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ModalService } from 'src/services/modal.service';

interface Alert {
  type: string;
  message: string;
}


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
  alert: Alert;

  constructor(private data: KindService, private modalService: ModalService, private router: Router) {

  }

  ngOnInit() {

    this.alert = { type: '', message: '' };
    this.data
      .findAllKind()
      .subscribe(arg => (this.listeKinds = arg));

    this.data.checkKind.subscribe(message => {
      if (message !== null) {
        this.alert.message = message[1],
          this.alert.type = message[0];
      }
      setTimeout(() => {
        this.alert.message = '',
          this.alert.type = '';
      }, 2000);
      this.data
        .findAllKind()
        .subscribe(arg => (this.listeKinds = arg));
    });

  }

  submit() {
    // this.modalService.dismissAll();

    this.data.updateKind(this.oneKind).subscribe(() => this.data.findAllKind()
      .subscribe(arg => (this.listeKinds = arg)),
      error => console.log(`l'update n'a pas eu lieu` + error.error));
  }

  delete(kind: Kind) {
    console.log(kind);
    // this.modalService.dismissAll();
    this.data.deleteKind(kind.id).subscribe();
  }

  openUpdate(kind: Kind) {
    this.data.ajoutKind(kind);
    this.modalService.openModal('updateKind');

  }

  openDelete(kind: Kind) {
    this.data.ajoutKind(kind);
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
    this.data.ajoutKind(kind);
    this.modalService.openModal('historicKind', { size: 'lg' });
  }
  newKind() {
    this.router.navigate(['/creation-nature']);
  }
}

