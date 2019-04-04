import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';
import { ModalDeleteUserComponent } from './modal-delete-user/modal-delete-user.component';
import { ModalUpdateUserComponent } from './modal-update-user/modal-update-user.component';
import { ConnectionUserComponent } from './connection-user/connection-user.component';
import { ListerNatureComponent } from './lister-nature/lister-nature.component';


export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'creationNature', component: CreationNatureMissionComponent },
  { path: 'users', component: ListerUserComponent, children: [
    { path: 'update-user', component: ModalUpdateUserComponent },
    { path: 'delete-user', component: ModalDeleteUserComponent },
  ] },
  { path: 'users', component: ListerUserComponent },
  { path: 'kinds', component: ListerNatureComponent },
  { path: 'creationUsers', component: FormusercreateComponent },
  { path: 'login', component: ConnectionUserComponent },
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
];
