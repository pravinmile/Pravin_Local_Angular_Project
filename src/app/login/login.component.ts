import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login = 'Log-In Page';
  First_Name = 'First Name';
  Middle_Name = 'Middle Name';
  Last_Name = 'Last Name';
  PassWord = 'Password'; 
  UsserName : any;
  myName = 'Pravin';
  mName = 'Shivaji';
  lName = 'Mile';
  city = 'Mumbai';
  click(){
    this.login = 'You have login into the page';
    this.UsserName = 'Pravin Shivaji Mile'
    
  }
}
