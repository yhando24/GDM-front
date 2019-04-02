import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormusercreateComponent } from './formusercreate/formusercreate.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, FormusercreateComponent, ListerUserComponent],

  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
