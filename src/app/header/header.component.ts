import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServiceService } from 'src/services/auth-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnDestroy, OnInit {




  user : User = null;
  private subscription: Subscription;
  constructor(private auth: AuthServiceService, private router: Router) {



  }

  ngOnInit(): void {

    console.log("DANS LE CONSTRUCTEUR")
    this.subscription = this.auth.currentUser.subscribe(
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














  isAuthenticated(): boolean{
    return this.auth.isAuthenticated;

  }
bye(){
  console.log('deconnection');
  this.user = null;
  this.auth.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}






