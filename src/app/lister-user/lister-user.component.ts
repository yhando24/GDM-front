import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from '../models';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css']
})

export class ListerUserComponent implements OnInit {
         listeUsers;
         userToDelete: User;
         titreModal: string;
         messageModal: string;
         footerModal: string;
         constructor(private data: UserService, private modalService: NgbModal, config: NgbModalConfig) {
           config.backdrop = 'static';
           config.keyboard = false;
         }

         ngOnInit() {
           this.data
             .finAllUser()
             .subscribe(arg => (this.listeUsers = arg));
         }
         delete(user: User) {
           console.log(user);
           this.modalService.dismissAll();
           /* this.data.deleteOneUser(user).subscribe(); */
         }
         update(user: User) {
           /*  this.data.deleteOneUser(user)
       .subscribe();
  */
         }
          open(content , user) {
            this.titreModal = 'Voulez vous vraiment supprimer';
            this.messageModal =  `L'utilisateur ${user.lastName} ${user.firstName}`;
            this.userToDelete = user;
            this.modalService.open(content);
          }
       }
