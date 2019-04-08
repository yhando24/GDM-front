import { Component } from '@angular/core';
import { AuthServiceService } from 'src/services/auth-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GDM-front';
  authenticated : boolean = false;
  constructor(private router: Router) {
console.log('dans le app components')

    const helper = new JwtHelperService();
    const idToken = localStorage.getItem("id_token");

    if (!helper.isTokenExpired(idToken)) {
      this.authenticated = true;
    }
    console.log(this.authenticated)
  }


}

