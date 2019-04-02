import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/data.service';
import { User } from '../models';


@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css']
})
export class ListerUserComponent implements OnInit {
  listeUsers;
  constructor(private data: UserService) { }

  ngOnInit() {
     this.data.finAllUser()
       .subscribe(arg => this.listeUsers = arg);
  }
  delete(user: User) {
   /*  this.data.deleteOneUser(user)
      .subscribe();
 */
  }
}
