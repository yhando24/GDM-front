import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { AccueilComponent } from './accueil/accueil.component';


export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'creationNature', component: CreationNatureMissionComponent },
  { path: 'users', component: ListerUserComponent },

  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
];
