import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewrecordComponent } from './viewrecord/viewrecord.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AttendenceComponent } from './attendence/attendence.component';
const routes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'attendence',component:AttendenceComponent},
  {path:'about',component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'employeeform',component:EmployeeformComponent},
  {path:'viewrecord',component:ViewrecordComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
