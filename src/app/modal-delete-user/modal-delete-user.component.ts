import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-delete-user.component.html',
})
export class NgbdModalContent {
  @Input() name;
  @Input() user;
  constructor(private data: UserService , private router: Router, public activeModal: NgbActiveModal, private modSer: NgbModal) {}

  delete() {
    this.modSer.dismissAll(NgbdModalContent);
    this.data
      .deleteOneUser(this.user)
      .subscribe(() => console.log('plop'),
        error => console.log(`le delete n'a pas fonctionne ` + error.error));
  }
  close() {
    this.router.navigate(['/users/']);
    this.modSer.dismissAll(NgbdModalContent);
  }
}


@Component({
  selector: 'app-modal-delete-user',
  template: '',
  styleUrls: ['./modal-delete-user.component.css']
})
export class ModalDeleteUserComponent implements OnInit {

  oneUser: User;

  messageModal: string;
  closeResult: string;
  constructor(private modSer: NgbModal, private data: UserService) { }

  ngOnInit() {
    this.data.user.subscribe(user => {
      const modalRef = this.modSer.open(NgbdModalContent);
      this.oneUser = user;
      modalRef.componentInstance.user = user;
      modalRef.componentInstance.name = `L'utilisateur ${user.lastName} ${user.firstName}`;
    });
  }



}
