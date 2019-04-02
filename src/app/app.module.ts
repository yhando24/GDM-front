import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { HeaderComponent } from './header/header.component';
import { CreationNatureMissionComponent } from './creation-nature-mission/creation-nature-mission.component';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CreationNatureMissionComponent, FormusercreateComponent],

  imports: [BrowserModule, NgbModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
