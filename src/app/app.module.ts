import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { HeaderComponent } from './header/header.component';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { UpdateNatureMissionComponent } from './update-nature-mission/update-nature-mission.component';


@NgModule({
  declarations: [AppComponent,
    FormusercreateComponent,
    ListerUserComponent,
    CreationNatureMissionComponent,
    HeaderComponent,
    AccueilComponent,
    UpdateNatureMissionComponent],

  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
