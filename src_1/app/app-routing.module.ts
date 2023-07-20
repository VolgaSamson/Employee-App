import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EmployeeListComponent } from './dashboard/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './dashboard/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './dashboard/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './dashboard/employee-details/employee-details.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path: 'employees' , component: EmployeeListComponent},
  {path: 'create-employee' , component: CreateEmployeeComponent},
  {path: 'app-update-employee/:id' , component: UpdateEmployeeComponent},
  {path: 'app-employee-details/:id' , component: EmployeeDetailsComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
