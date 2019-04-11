import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';

import { ConnexionGuard } from 'src/guards/connexionGuard';
import { ConnectionUserComponent } from './connection-user/connection-user.component';
import { ListerNatureComponent } from './lister-nature/lister-nature.component';
import { ListerHistoriqueNatureComponent } from './lister-historique-nature/lister-historique-nature.component';
import { AdminGuard } from 'src/guards/admin.guard';
import { KindsResolver } from './lister-nature/lister-nature.route';
import { ListerMissionsComponent } from './lister-missions/lister-missions.component';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import { CreationExpenseAccountComponent } from './creation-expense-account/creation-expense-account.component';
import { ListExpenseAccountComponent } from './list-expense-account/list-expense-account.component';
import { ApproveMissionComponent } from './approve-mission/approve-mission.component';
import { VuePrimesComponent } from './vue-primes/vue-primes.component';


export const ROUTES: Routes = [

  { path: 'creation-nature', component: CreationNatureMissionComponent, canActivate: [AdminGuard]},
  { path: 'users', component: ListerUserComponent, canActivate: [AdminGuard]},
  { path: 'approve-mission', component: ApproveMissionComponent  },
  { path: 'kinds', component: ListerNatureComponent},
  { path: 'creation-users', component: FormusercreateComponent, canActivate: [AdminGuard]},
  { path: 'login', component: ConnectionUserComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'missions', component: ListerMissionsComponent },
  { path: 'createMission', component: CreateMissionComponent,
  resolve: {
    kinds: KindsResolver
  }},
  { path: 'createExpenseAccount', component: CreationExpenseAccountComponent },
  { path: 'listExpenseAccount', component: ListExpenseAccountComponent},
  { path: 'primes/:idUser', component: VuePrimesComponent},


  {
    path: 'kinds/createListe',
    component: ListerNatureComponent,
    resolve: {
      kinds: KindsResolver
    }
  },
  {
    path: 'accueil',
    component: AccueilComponent,
    canActivate: [ConnexionGuard],

  },
  { path: 'kinds/historique/:id', component: ListerHistoriqueNatureComponent },
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
];

