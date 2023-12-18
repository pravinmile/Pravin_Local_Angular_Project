import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { AdminSignUpComponent } from './admin/admin-sign-up/admin-sign-up.component';
import { AdminLogInComponent } from './admin/admin-log-in/admin-log-in.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'signup',
    component : SignupComponent
  },
  {
    path : 'admin', loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path : '', component : HomeComponent
  },
  {
    path : 'home' , component : HomeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
