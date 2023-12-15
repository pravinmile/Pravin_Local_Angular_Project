import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';

const routes: Routes = [
  {
    path : 'adminLogIn',
    component : AdminLogInComponent
  },
  {
    path : 'adminSignUp',
    component : AdminSignUpComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
