import { Component, OnInit } from '@angular/core';
import { KindService } from 'src/services/kind.service';
import { Kind } from '../models';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lister-nature',
  templateUrl: './lister-nature.component.html',
  styleUrls: ['./lister-nature.component.css']
})
export class ListerNatureComponent implements OnInit {

  listeKinds;

  constructor(private data: KindService, private modalService: ModalDismissReasons) { }

  ngOnInit() {
    this.data.findAllKind().subscribe(arg => this.listeKinds = arg);
  }

  openUpdate(content) {

    this.data.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



  openDelete(content) {

    this.modalService.open(content);
  }

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

