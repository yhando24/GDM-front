import { Routes } from '@angular/router';
import { ListerUserComponent } from './lister-user/lister-user.component';



export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
  { path: 'users', component: ListerUserComponent },

];
