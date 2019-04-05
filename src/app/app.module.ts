import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ListerUserComponent } from './lister-user/lister-user.component';

import { HeaderComponent } from './header/header.component';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';

import { ModalDeleteUserComponent } from './modal-delete-user/modal-delete-user.component';
import { ModalUpdateUserComponent } from './modal-update-user/modal-update-user.component';
import { ConnectionUserComponent } from './connection-user/connection-user.component';
import { AuthInterceptor } from 'AuthInterceptor';
import { ListerNatureComponent } from './lister-nature/lister-nature.component';


@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent, ListerUserComponent],
  imports: [BrowserModule, NgbModule,
    RouterModule.forRoot(ROUTES)],
  providers: [],
=======
  declarations: [
    AppComponent,
    FormusercreateComponent,
    ListerUserComponent,
    CreationNatureMissionComponent,
    HeaderComponent,
    AccueilComponent,
    ModalDeleteUserComponent,
    ModalUpdateUserComponent,
    ListerNatureComponent,
    ConnectionUserComponent],

  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
>>>>>>> f72cccf96aafbc7a60c270b9a8a12ae1d412b70a
  bootstrap: [AppComponent]
})
export class AppModule {}
