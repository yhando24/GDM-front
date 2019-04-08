import { Injectable } from '@angular/core';
import { ModalUpdateUserComponent } from 'src/app/modal-update-user/modal-update-user.component';
import { ModalDeleteUserComponent } from 'src/app/modal-delete-user/modal-delete-user.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: NgbModal) {}

  MODALS = {
    updateUser: ModalUpdateUserComponent,
    deleteUser: ModalDeleteUserComponent
  };
  openModal(name: string) {
    this.modalService.open(this.MODALS[name]);
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
