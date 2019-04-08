import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule, routesUser } from './user-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserRoutingModule,
  RouterModule.forChild(routesUser)
  ]
})
export class UserModule {}
