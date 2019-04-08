import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServiceService } from 'src/services/auth-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnDestroy, OnInit {




  user : User = null;
  private subscription: Subscription;
  constructor(private auth: AuthServiceService, private router: Router) {

    const helper = new JwtHelperService();
    const idToken = localStorage.getItem("id_token");

    if (!helper.isTokenExpired(idToken)) {
      this.auth.currentUser();
    }
    console.log("DANS LE CONSTRUCTEUR")
    this.subscription = this.auth.current_User.subscribe(
      (data: User) => {
        this.user = data;

      },
      error => {
        console.log(error)
        this.user == null;
      },

      () => {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      });
  }

  ngOnInit(): void {





  }



  isAuthenticated(): boolean{
    return this.auth.isAuthenticated;

  }
bye(){
  console.log('deconnection');
  this.user = null;
  this.auth.logout();
  javascript: window.location.reload()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}






