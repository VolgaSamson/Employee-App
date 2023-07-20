import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './dashboard/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './dashboard/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './dashboard/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './dashboard/employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeMainSectionComponent } from './home-main-section/home-main-section.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { FilterPipe } from './filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeMainSectionComponent,
    HeaderLoginComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
