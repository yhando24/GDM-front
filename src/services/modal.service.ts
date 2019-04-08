import { Injectable } from '@angular/core';
import { ModalUpdateUserComponent } from 'src/app/modal-update-user/modal-update-user.component';
import { ModalDeleteUserComponent } from 'src/app/modal-delete-user/modal-delete-user.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ListerHistoriqueNatureComponent } from 'src/app/lister-historique-nature/lister-historique-nature.component';



@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: NgbModal) { }

  MODALS = {
    updateUser: ModalUpdateUserComponent,
    deleteUser: ModalDeleteUserComponent,
    historicKind: ListerHistoriqueNatureComponent
  };
  openModal(name: string, sizeP?: NgbModalOptions) {
    if (sizeP !== undefined && sizeP !== null) {
      this.modalService.open(this.MODALS[name], sizeP);
    } else {
      this.modalService.open(this.MODALS[name]);
    }
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
