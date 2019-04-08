import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { UserService } from 'src/services/user.service';
import { ModalService } from 'src/services/modal.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-modal-delete-user',
  templateUrl: './modal-delete-user.component.html',
  styleUrls: ['./modal-delete-user.component.css']
})
export class ModalDeleteUserComponent implements OnInit {
  oneUser: User;


  messageModal: string;
  closeResult: string;
  //constructor(private modSer: NgbModal, private data: UserService,public modal: NgbActiveModal) { }

  ngOnInit() {
    console.log('passe dans le init modaldeleteuser');
    this.data.user.subscribe(user => {
      const modalRef = this.modSer.open(NgbdModalContent);


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
    this.data.deleteOneUser(this.oneUser).subscribe();

  }
}
