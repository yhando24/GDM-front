import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';

import { ConnectionUserComponent } from './connection-user/connection-user.component';
import { ListerNatureComponent } from './lister-nature/lister-nature.component';
import { ModalDeleteUserComponent } from './modal-delete-user/modal-delete-user.component';
import { ModalUpdateUserComponent } from './modal-update-user/modal-update-user.component';
import { ListerHistoriqueNatureComponent } from './lister-historique-nature/lister-historique-nature.component';
import { ModalDeleteNatureComponent } from './modal-delete-nature/modal-delete-nature.component';
import { ModalUpdateNatureComponent } from './modal-update-nature/modal-update-nature.component';

export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'creationNature', component: CreationNatureMissionComponent },
  {
    path: 'users',
    component: ListerUserComponent,
    children: [
      {
        path: 'delete-user',
        component: ModalDeleteUserComponent
      },
      {
        path: 'update-user',
        component: ModalUpdateUserComponent
      }
    ]
  },
  { path: 'delete-user', component: ModalDeleteUserComponent, outlet: 'deleteUser' },
  {
    path: 'kinds', component: ListerNatureComponent,
    children: [
      {
        path: 'delete-kind', component: ModalDeleteNatureComponent
      },
      {
        path: 'update-kind', component: ModalUpdateNatureComponent
      }
    ]
  },
  { path: 'creationUsers', component: FormusercreateComponent },
  { path: 'login', component: ConnectionUserComponent },
  { path: 'kinds/historique/:id', component: ListerHistoriqueNatureComponent },
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'delete-user', component: ModalDeleteUserComponent }
];
