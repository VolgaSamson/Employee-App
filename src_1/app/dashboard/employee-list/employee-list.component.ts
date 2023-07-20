import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees?:any = [];
  firstname: string = '';
  constructor(private employeeService: EmployeeService,
    private router:Router) {}
  ngOnInit(): void{
this.getEmployees();

  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees = data;
    })
  }
  updateEmployee(id: any)
  {
this.router.navigate(['/dashboard/app-update-employee',id]);
  }
  employeedetails(id: any)
  {
    this.router.navigate(['/dashboard/app-employee-details',id]);
  }
  deleteEmployee(id: any){
this.employeeService.deleteEmployee(id).subscribe(data =>{
  this.getEmployees();
})
  }
}
