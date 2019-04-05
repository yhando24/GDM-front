import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-modal-delete-user',
  templateUrl: './modal-delete-user.component.html',
  styleUrls: ['./modal-delete-user.component.css']
})
export class ModalDeleteUserComponent implements OnInit {
  @Input() oneUser: User;
  @Input() visible: boolean;
  titreModal: string;
  messageModal: string;
  closeResult: string;
  user;
  constructor(private modSer: NgbModal, private data: UserService) { }

  ngOnInit() {
    this.data.user.subscribe(user => {
      console.log(user);
      this.modSer.open('modalDelete');
      this.titreModal = 'Voulez vous vraiment supprimer';
      this.messageModal = `L'utilisateur ${user.lastName} ${user.firstName}`;
    }
    );
  }
  openDelete(content: string, user: User) {

    //this.oneUser = user;
  }
  delete(user: User) {
    this.modSer.dismissAll();
    this.data
      .deleteOneUser(user)
      .subscribe(value => value,
        error => console.log(`delete n'a pas fonctionee` + error.error));
  }
}
