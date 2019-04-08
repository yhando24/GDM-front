import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';
import { AppComponent } from './app.component';
import { ConnexionGuard } from 'src/guards/connexionGuard';
import { ConnectionUserComponent } from './connection-user/connection-user.component';
import { ListerNatureComponent } from './lister-nature/lister-nature.component';
import { ModalDeleteUserComponent } from './modal-delete-user/modal-delete-user.component';
import { ModalUpdateUserComponent } from './modal-update-user/modal-update-user.component';
import { ListerHistoriqueNatureComponent } from './lister-historique-nature/lister-historique-nature.component';

export const ROUTES: Routes = [

  { path: 'creationNature', component: CreationNatureMissionComponent },
  { path: 'users',
   component: ListerUserComponent ,
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
  { path: 'delete-user', component: ModalDeleteUserComponent, outlet: 'deleteUser'},
  { path: 'kinds', component: ListerNatureComponent },
  { path: 'creationUsers', component: FormusercreateComponent },
  { path: 'login', component: ConnectionUserComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'accueil',
    component: AccueilComponent,
    canActivate: [ConnexionGuard],

  },
  { path: 'kinds/historique/:id', component: ListerHistoriqueNatureComponent },
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'delete-user', component: ModalDeleteUserComponent}
];
