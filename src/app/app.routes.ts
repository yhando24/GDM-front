import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';




export const ROUTES: Routes = [
  { path: 'creationNature', component: CreationNatureMissionComponent },
  { path: '', pathMatch: 'full', redirectTo: 'accueil' }
];
