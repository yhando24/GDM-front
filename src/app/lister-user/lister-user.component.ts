import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User, Role, getRolesEnum,  } from '../models';
import { Router } from '@angular/router';
import { ModalDeleteUserComponent } from '../modal-delete-user/modal-delete-user.component';
import { ModalUpdateUserComponent } from '../modal-update-user/modal-update-user.component';
import { ModalService } from './../../services/modal.service';

interface Alert {
  type: string;
  message: string;
}

const MODALS = {
    annulerModule : ModalDeleteUserComponent,
    modifModule : ModalUpdateUserComponent
};

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
  alert: Alert;
  constructor(private data: UserService, private router: Router, private modal: ModalService) {
  }

    ngOnInit() {
      this.alert = {type: '' , message: ''};
      this.enumRole = getRolesEnum();
      this.data
          .finAllUser()
          .subscribe(arg => (this.listeUsers = arg));

      this.data.checkUser.subscribe(message => {
        if (message !== null) {
          this.alert.message = message[1],
          this.alert.type = message[0];
        }
        setTimeout(() => {
          this.alert.message = '',
          this.alert.type = '';
        }, 2000);
        this.data
            .finAllUser()
            .subscribe(arg => (this.listeUsers = arg));
      });
    }

  update(user) {
    this.data.addUser(user);
    this.modal.openModal('updateUser');
  }
  newUser() {
    this.router.navigate(['/creation-users/']);
  }

  delete(user: User) {
    this.data.addUser(user);
    this.modal.openModal('deleteUser');
  }

}
