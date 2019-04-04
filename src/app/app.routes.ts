import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UpdateNatureMissionComponent } from './update-nature-mission/update-nature-mission.component';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';
import { ModalDeleteUserComponent } from './modal-delete-user/modal-delete-user.component';
import { ModalUpdateUserComponent } from './modal-update-user/modal-update-user.component';



export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'creationNature', component: CreationNatureMissionComponent },
  { path: 'users', component: ListerUserComponent, children: [
    { path: 'update-user', component: ModalUpdateUserComponent },
    { path: 'delete-user', component: ModalDeleteUserComponent },
  ] },
  { path: 'updateNature', component: UpdateNatureMissionComponent},
  { path: 'creationUsers', component: FormusercreateComponent },
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
];
