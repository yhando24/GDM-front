import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  authenticated:boolean;
  constructor(private router: Router) {
    console.log('dans le app components')

    const helper = new JwtHelperService();
    const idToken = localStorage.getItem("id_token");

    if (!helper.isTokenExpired(idToken)) {
      this.authenticated = true;
    }
    console.log(this.authenticated)
  }
  ngOnInit() {}

}
