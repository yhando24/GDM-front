import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './app.routes';

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
import { ListerHistoriqueNatureComponent } from './lister-historique-nature/lister-historique-nature.component';
import { ModalUpdateNatureComponent } from './modal-update-nature/modal-update-nature.component';
import { ModalDeleteNatureComponent } from './modal-delete-nature/modal-delete-nature.component';

@NgModule({
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
    ConnectionUserComponent,

    ListerHistoriqueNatureComponent,
    ModalDeleteNatureComponent,
    ModalUpdateNatureComponent,
  ],

  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  entryComponents: [ModalUpdateUserComponent,
    ModalDeleteUserComponent, ModalDeleteNatureComponent, ModalUpdateNatureComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
