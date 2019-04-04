import { Component, OnInit } from '@angular/core';
import { KindService } from 'src/services/kind.service';
import { Kind } from '../models';
import { NgbModal, NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Route } from '@angular/compiler/src/core';


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

  constructor(private data: KindService, private modalService: NgbModal, config: NgbModalConfig) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.data.findAllKind()
      .subscribe(arg => (this.listeKinds = arg));
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
    this.data.deleteKind(this.oneKind).subscribe(arg => (this.oneKind = arg));
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
}

