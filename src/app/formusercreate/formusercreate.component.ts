import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User, Role, getEnum } from '../models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formusercreate',
  templateUrl: './formusercreate.component.html',
  styleUrls: ['./formusercreate.component.css']
})
export class FormusercreateComponent implements OnInit {

  listEnum: Role[] = getEnum();
  user: User = {};
  messageErreur: string = '';

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {

  }
  submit() {
    this.userService.createUser(this.user).subscribe(() => {
      console.log(this.user);
      this.user +' //Envoyé avec succès'
      this.router.navigate(['/accueil']);
    },
      error => {
        this.messageErreur = error.error;
      });
  }

}

