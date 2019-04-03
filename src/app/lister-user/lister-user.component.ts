import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User, Role, getEnum } from '../models';
import { NgbModal, NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css']
})

export class ListerUserComponent implements OnInit {
  listeUsers;
  oneUser: User;
  titreModal: string;
  messageModal: string;
  closeResult: string;
  enumRole: Role[];
  updateForm: FormGroup;

  constructor(private data: UserService, private modSer: NgbModal, config: NgbModalConfig, private fb: FormBuilder) {
    this.updateForm = this.fb.group(
      {
        lastName: ['', [Validators.required]],
        firstName: ['', [Validators.required, Validators.minLength(3)]],
      }
    );
    }

    ngOnInit() {
      this.enumRole = getEnum();
      this.data
          .finAllUser()
          .subscribe(arg => (this.listeUsers = arg));
      }

    delete(user: User) {
      console.log(user);
      this.modSer.dismissAll();
    }


  openDelete(content: string , user: User) {
    this.titreModal = 'Voulez vous vraiment supprimer';
    this.messageModal =  `L'utilisateur ${user.lastName} ${user.firstName}`;
    this.oneUser = user;
    this.modSer.open(content);
  }
  openUpdate(content: string, user: User) {
    this.oneUser = user;
    this.modSer.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.oneUser);
      console.log(this.updateForm);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`,

        console.log(this.updateForm);
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
