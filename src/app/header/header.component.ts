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
export class HeaderComponent implements  OnDestroy {



  user : User = null;
  private subscription: Subscription;
  constructor(private auth: AuthServiceService, private router: Router) {
    if(localStorage.getItem("id_token") != null){


    console.log("DANS LE CONSTRUCTEUR")
    this.auth.currentUser.then((valeur) => {
    this.user=valeur;
    }, (raison) => {
      console.log(raison); // Erreur !
    });

    }
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






