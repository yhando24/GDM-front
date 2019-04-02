import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from '../models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formusercreate',
  templateUrl: './formusercreate.component.html',
  styleUrls: ['./formusercreate.component.css']
})
export class FormusercreateComponent implements OnInit {

  user: User = {};
  messageErreur: string = '';

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {

  }
  submit() {
    this.userService.createUser(this.user).subscribe(() => {
      this.user + ' //Envoyé avec succès'
      this.router.navigate(['/accueil']);
    },
      error => {
        this.messageErreur = error.error;
      });
  }

}

