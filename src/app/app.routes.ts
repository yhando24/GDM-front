import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { AccueilComponent } from './accueil/accueil.component';
<<<<<<< HEAD
import { UpdateNatureMissionComponent } from './update-nature-mission/update-nature-mission.component';
=======
import { FormusercreateComponent } from './formusercreate/formusercreate.component';
>>>>>>> 1dad64d8ff2f7094c33e861efafb5cbc40954b91


export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'creationNature', component: CreationNatureMissionComponent },
  { path: 'users', component: ListerUserComponent },
<<<<<<< HEAD
  { path: 'updateNature', component: UpdateNatureMissionComponent},
=======
  { path: 'creationUsers', component: FormusercreateComponent },
>>>>>>> 1dad64d8ff2f7094c33e861efafb5cbc40954b91

  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
];
