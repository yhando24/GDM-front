
import { User } from 'src/app/models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServiceService } from 'src/services/auth-service.service';
import { Subscription, ReplaySubject, empty, AsyncSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnDestroy, OnInit {



  role ;
  user: User;
  private subscription: Subscription;

  constructor(private auth: AuthServiceService,private router: Router) {
    this.auth.currentUser();
    this.auth.current_Role.subscribe(role =>
      this.role = role);
    this.auth.current_User.subscribe(
      (data: User) => {
        this.user = data;
      },
      error => {
        console.log(error);
        this.user = null;
      });
  }

  ngOnInit(): void {
  }

  public get connectedUser(){
    return this.user;
  }



  isAuthenticated(): boolean{
    return this.auth.isAuthenticated;

  }
bye() {
  console.log('deconnection');
  this.user = null;
  this.auth.logout();
  this.router.navigate(['/login/']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

  }
}






