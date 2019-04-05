import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User, Role, getRolesEnum,  } from '../models';
import { Router } from '@angular/router';
import { ModalService } from './../../services/modal.service';


@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css'],

})

export class ListerUserComponent implements OnInit {
  listeUsers;
  oneUser: User;
  enumRole: Role[];
  role: string;
  visible: boolean;
  constructor(private data: UserService, private router: Router, private modal:ModalService) {
  }

    ngOnInit() {
      this.visible = false;
      this.enumRole = getRolesEnum();
      this.data
          .finAllUser()
          .subscribe(arg => (this.listeUsers = arg));
      }

  update(user) {
    this.data.addUser(user);
    this.modal.openModal('updateUser');
  }
  newUser() {
    this.router.navigate(['/creationUsers/']);
  }
  delete(user: User) {
    this.data.addUser(user);
    this.modal.openModal('deleteUser');
  }
}
