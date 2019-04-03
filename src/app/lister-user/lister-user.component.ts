import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User, Role, getEnum } from '../models';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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
  closeResult: string;
  enumRole: Role[];
  role: string;

  constructor(private data: UserService, private modSer: NgbModal, private router: Router) {
    }

    ngOnInit() {
      this.enumRole = getEnum();
      this.data
          .finAllUser()
          .subscribe(arg => (this.listeUsers = arg));
      }

  delete(user: User) {
      this.modSer.dismissAll();
      this.data
        .deleteOneUser(user)
        .subscribe(value => value,
        error => console.log(`delete n'a pas fonctionee` + error.error));
  }
  submit() {
    this.modSer.dismissAll();
    this.data
      .saveOneUser(this.oneUser)
      .subscribe(value => value,
        error => console.log(`update n'a pas fonctionne ` + error.error));
  }

  openDelete(content: string , user: User) {
    this.titreModal = 'Voulez vous vraiment supprimer';
    this.messageModal =  `L'utilisateur ${user.lastName} ${user.firstName}`;
    this.oneUser = user;
    this.modSer.open(content);
  }
  openUpdate(content: string, user: User) {
    this.oneUser = user;
    this.modSer.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(() => {
    });
  }
  newUser(){
    this.router.navigate(['/creationUsers/']);
  }
}
