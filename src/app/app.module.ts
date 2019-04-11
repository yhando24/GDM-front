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
import { ListerMissionsComponent } from './lister-missions/lister-missions.component';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import { ListerHistoriqueNatureComponent } from './lister-historique-nature/lister-historique-nature.component';
import { ModalUpdateNatureComponent } from './modal-update-nature/modal-update-nature.component';
import { ModalDeleteNatureComponent } from './modal-delete-nature/modal-delete-nature.component';
import { KeysPipe } from './pipe/key-pipe-enum';
import { KindsResolver } from './lister-nature/lister-nature.route';
import { ApproveMissionComponent } from './approve-mission/approve-mission.component';
import { ModalUpdateMissionComponent } from './modal-update-mission/modal-update-mission.component';
import { CreationExpenseAccountComponent } from './creation-expense-account/creation-expense-account.component';
import { ListExpenseAccountComponent } from './list-expense-account/list-expense-account.component';
import { ModalDeleteMissionComponent } from './modal-delete-mission/modal-delete-mission.component';
import { DisplayAllMissionComponent } from './display-all-mission/display-all-mission.component';
import { VuePrimesComponent } from './vue-primes/vue-primes.component';
import { CalendarMissionComponent } from './calendar-mission/calendar-mission.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!




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
    ListerMissionsComponent,
    CreateMissionComponent,
    ListerHistoriqueNatureComponent,
    ModalDeleteNatureComponent,
    ModalUpdateNatureComponent,
    KeysPipe,
    KindsResolver,
    ApproveMissionComponent,
    CreationExpenseAccountComponent,
    ModalDeleteMissionComponent,
    CalendarMissionComponent,
    ModalUpdateMissionComponent,
    CreationExpenseAccountComponent,
    ListExpenseAccountComponent,
    DisplayAllMissionComponent,
    VuePrimesComponent
  ],

  imports: [
    BrowserModule,
    FullCalendarModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  entryComponents: [ModalUpdateUserComponent,
    ModalDeleteUserComponent, ModalDeleteNatureComponent, ModalUpdateNatureComponent,
    ModalDeleteMissionComponent, ModalUpdateMissionComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
