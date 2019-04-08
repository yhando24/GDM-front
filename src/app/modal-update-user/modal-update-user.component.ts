import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from '../models';
import { getRolesEnum } from './../models';




@Component({
  selector: 'app-modal-update-user',
  templateUrl: './modal-update-user.component.html',
  styleUrls: ['./modal-update-user.component.css']
})
export class ModalUpdateUserComponent implements OnInit {
  oneUser: User;
  listeRole;
  constructor(private data: UserService) {
  }

  ngOnInit() {
    this.data.oneUser.subscribe(user => this.oneUser = user);
    this.listeRole =  getRolesEnum();
  }
  close() {
   this.data.closeModal();
  }
  submit() {
    this.data.saveOneUser(this.oneUser).subscribe(
      user => this.data.userUpdated(user),
      error => console.log(error.error)
      );
    this.data.closeModal();
  }
}
