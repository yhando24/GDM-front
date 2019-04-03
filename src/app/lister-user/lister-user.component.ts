import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User, Role, getEnum } from '../models';
import { NgbModal, NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, ResolveStart } from '@angular/router';



@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css']
})

export class ListerUserComponent implements OnInit {
  listeUsers;
  oneUser: User;
  titreModal: string;
  messageModal: string;
  footerModal: string;
  closeResult: string;
  enumRole: Role[];
  role: Role;
    constructor(private data: UserService, private modalService: NgbModal, config: NgbModalConfig, private router: Router) {
      config.backdrop = 'static';
      config.keyboard = false;
    }

    ngOnInit() {
      this.enumRole = getEnum();
      console.log(this.enumRole);
      this.data
          .finAllUser()
          .subscribe(arg => (this.listeUsers = arg));
      }

    delete(user: User) {
      console.log(user);
      this.modalService.dismissAll();
    }

    update(user: User) {
      this.router.navigate(['/user/' + user.email]);
    }
    openDelete(content: string , user: User) {
      this.titreModal = 'Voulez vous vraiment supprimer';
      this.messageModal =  `L'utilisateur ${user.lastName} ${user.firstName}`;
      this.oneUser = user;
      this.modalService.open(content);
    }
  openUpdate(content: string, user: User) {
    this.oneUser = user;

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(result);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
