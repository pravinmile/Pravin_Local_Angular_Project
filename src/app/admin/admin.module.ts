import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';


@NgModule({
  declarations: [
    AdminSignUpComponent,
    AdminLogInComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
