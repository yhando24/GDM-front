import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { ListerUserComponent } from './lister-user/lister-user.component';


export const ROUTES: Routes = [
  { path: 'creationNature', component: CreationNatureMissionComponent },
  { path: 'users', component: ListerUserComponent },

  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
];
