import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UpdateNatureMissionComponent } from './update-nature-mission/update-nature-mission.component';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';
import { ConnectionUserComponent } from './connection-user/connection-user.component';
import { AppComponent } from './app.component';
import { ConnexionGuard } from 'src/guards/connexionGuard';



export const ROUTES: Routes = [

  { path: 'creationNature', component: CreationNatureMissionComponent },
  { path: 'users', component: ListerUserComponent },
  { path: 'updateNature', component: UpdateNatureMissionComponent},
  { path: 'creationUsers', component: FormusercreateComponent },
  { path: 'login', component: ConnectionUserComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'accueil',
    component: AccueilComponent,
    canActivate: [ConnexionGuard],

  }

];
