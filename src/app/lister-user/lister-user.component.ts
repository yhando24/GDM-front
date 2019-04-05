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
  enumRole: Role[];
  role: string;
  visible: boolean;
  constructor(private data: UserService, private router: Router, private modSer: NgbModal) {
  }

    ngOnInit() {
      this.visible = false;
      this.enumRole = getEnum();
      this.data
          .finAllUser()
          .subscribe(arg => (this.listeUsers = arg));
      }


  submit() {
    this.modSer.dismissAll();
    this.data
      .saveOneUser(this.oneUser)
      .subscribe(value => value,
        error => console.log(`update n'a pas fonctionne ` + error.error));
  }


  openUpdate(content: string, user: User) {
    this.oneUser = user;
    this.modSer.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(() => {
    });
  }
  newUser(){
    this.router.navigate(['/creationUsers/']);
  }
  update(user) {
    this.data.addOneUser(user);
    this.router.navigate(['users/delete-user/']);
  }
}
