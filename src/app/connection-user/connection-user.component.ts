import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { AuthServiceService } from 'src/services/auth-service.service';
import { Router } from '@angular/router';

export class Logeur {
  email: string;
  password: string;
  actif : boolean;
}

@Component({
  selector: 'app-connection-user',
  templateUrl: './connection-user.component.html',
  styleUrls: ['./connection-user.component.css']
})


export class ConnectionUserComponent implements OnInit {

  user: Logeur = new Logeur();

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.user.email + this.user.password)


    if (this.user.email && this.user.password) {

    this.authService.login(this.user.email, this.user.password ).subscribe(
      (r) => {
        localStorage.setItem('id_token', r.id_token);
        this.authService.currentUser();
        this.router.navigateByUrl('/accueil');
      });
    }
  }
}
