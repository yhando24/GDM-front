import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ModalUpdateUserComponent } from '../modal-update-user/modal-update-user.component';
import { ModalDeleteUserComponent } from '../modal-delete-user/modal-delete-user.component';

export const routesUser: Routes = [
         {
           path: 'update-user',
           component: ModalUpdateUserComponent
         },
         {
           path: 'delete-user',
           component: ModalDeleteUserComponent
         }
       ];
@NgModule({
  imports: [RouterModule.forChild(routesUser)],
exports: [RouterModule]
})
export class UserRoutingModule { }
