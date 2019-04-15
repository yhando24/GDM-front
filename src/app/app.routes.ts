import { CalendarMissionResolver } from '../resolvers/CalendarMissionResolver';
import { Routes } from '@angular/router';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';

import { loginGuard } from 'src/guards/loginGuard';
import { ConnexionGuard } from 'src/guards/connexionGuard';
import { ConnectionUserComponent } from './connection-user/connection-user.component';
import { ListerNatureComponent } from './lister-nature/lister-nature.component';
import { ListerHistoriqueNatureComponent } from './lister-historique-nature/lister-historique-nature.component';
import { AdminGuard } from 'src/guards/admin.guard';
import { KindsResolver } from './lister-nature/lister-nature.route';
import { ListerMissionsComponent } from './lister-missions/lister-missions.component';
import { CreateMissionComponent } from './create-mission/create-mission.component';
import { CreationExpenseAccountComponent } from './creation-expense-account/creation-expense-account.component';
import { CalendarMissionComponent } from './calendar-mission/calendar-mission.component';
import { ListExpenseAccountComponent } from './list-expense-account/list-expense-account.component';
import { ApproveMissionComponent } from './approve-mission/approve-mission.component';
import { VuePrimesComponent } from './vue-primes/vue-primes.component';
import { DisplayAllMissionComponent } from './display-all-mission/display-all-mission.component';
import { ManagerGuard } from 'src/guards/manager.guard';
import { MissionResolver } from './creation-expense-account/MissionResolver';
import { ModalUpdateMissionComponent } from './modal-update-mission/modal-update-mission.component';



export const ROUTES: Routes = [

  { path: 'creation-nature', component: CreationNatureMissionComponent, canActivate: [AdminGuard] },
  { path: 'users', component: ListerUserComponent, canActivate: [AdminGuard] },
  { path: 'kinds', component: ListerNatureComponent, canActivate: [ConnexionGuard] },
  { path: 'creation-users', component: FormusercreateComponent, canActivate: [AdminGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'missions', component: ListerMissionsComponent, canActivate: [ConnexionGuard],
  resolve: {
    kinds: KindsResolver
  }, children : [{
      path: 'updateMission', component: ModalUpdateMissionComponent, resolve: {
      kinds: KindsResolver
    }
    } ]
  },
  { path: 'createExpenseAccount', component: CreationExpenseAccountComponent, canActivate: [ConnexionGuard] },
  {
    path: 'calendar-Mission', component: CalendarMissionComponent,
    resolve: { missions: CalendarMissionResolver }, canActivate: [ConnexionGuard]
  },
  {path : 'listeExpense', component: ListExpenseAccountComponent},
  { path: 'approve-mission', component: ApproveMissionComponent, canActivate: [ManagerGuard] },
  { path: 'login', component: ConnectionUserComponent, canActivate: [loginGuard]  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'display-all-mission', component: DisplayAllMissionComponent, canActivate: [ManagerGuard],
    resolve: {
      kinds: KindsResolver
    }
  },
  { path: 'createMission', component: CreateMissionComponent, canActivate: [ConnexionGuard],
  resolve: {
    kinds: KindsResolver
  }},
 // { path: 'listExpenseAccount', component: ListExpenseAccountComponent},
  { path: 'createExpenseAccount/:idMission', component: CreationExpenseAccountComponent, resolve: {mission: MissionResolver}},
  { path: 'listExpenseAccount/:idMission', component: ListExpenseAccountComponent, resolve: {mission: MissionResolver}},
  { path: 'listExpenseAccount/:idMission', component: ListExpenseAccountComponent},
  { path: 'primes', component: VuePrimesComponent},


  {
    path: 'accueil',
    component: AccueilComponent,
    canActivate: [ConnexionGuard],

  },
  { path: 'kinds/historique/:id', component: ListerHistoriqueNatureComponent },
  { path: '', pathMatch: 'full', redirectTo: 'accueil' },
];

