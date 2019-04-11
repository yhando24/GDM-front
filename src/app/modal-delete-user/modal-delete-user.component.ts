import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-modal-delete-user',
  templateUrl: './modal-delete-user.component.html',
  styleUrls: ['./modal-delete-user.component.css']
})
export class ModalDeleteUserComponent implements OnInit {
  oneUser: User;


  constructor(private data: UserService , private router: Router) {}

  ngOnInit() {
      this.data.oneUser.subscribe(user => {
      this.oneUser = user;
      });
  }
    close() {
      this.data.closeModal();
  }
  delete() {
    this.data.deleteOneUser(this.oneUser).subscribe(
      () => this.data.userDeleted(this.oneUser),
      error => this.data.userNotDeleted(error.error)
    );
    this.data.closeModal();

  }
}
