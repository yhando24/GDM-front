import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from '../models';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css']
})
export class NgbdModalConfirmAutofocus {
  constructor(public modal: NgbActiveModal) { }
}
export class NgbdModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}
const MODALS = {
  focusFirst: NgbdModalConfirm,
  autofocus: NgbdModalConfirmAutofocus
};
export class ListerUserComponent implements OnInit {
         listeUsers;
         withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;
         constructor(
           private data: UserService,
           private modalService: NgbModal
         ) {}

         ngOnInit() {
           this.data
             .finAllUser()
             .subscribe(arg => (this.listeUsers = arg));
         }
         delete(user: User) {
           /* this.data.deleteOneUser(user).subscribe(); */
         }
         update(user: User) {
           /*  this.data.deleteOneUser(user)
       .subscribe();
  */
         }
         open(name: string) {
           this.modalService.open(MODALS[name]);
         }
       }
