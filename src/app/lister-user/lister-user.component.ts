import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { UserService } from './../../services/user.service';
import { User, Role, getRolesEnum,  } from '../models';
import { Router } from '@angular/router';
import { ModalService } from './../../services/modal.service';

interface Alert {
  type: string;
  message: string;
}
>>>>>>> 87eeb7d98f4bde745450c878ae1667ba2d065dcc

@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
<<<<<<< HEAD
  styleUrls: ['./lister-user.component.css']
})
export class ListerUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

=======
  styleUrls: ['./lister-user.component.css'],

})

export class ListerUserComponent implements OnInit {
  listeUsers;
  oneUser: User;
  enumRole: Role[];
  role: string;
  alertVisible;
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
        this.alert.message = message,
        this.alert.type = 'success',
        this.alertVisible = true,
        setTimeout(() => {
          this.alertVisible = false;
        }, 3000),
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
    this.router.navigate(['/creationUsers/']);
  }
  delete(user: User) {
    this.data.addUser(user);
    this.modal.openModal('deleteUser');
  }
>>>>>>> 87eeb7d98f4bde745450c878ae1667ba2d065dcc
}
