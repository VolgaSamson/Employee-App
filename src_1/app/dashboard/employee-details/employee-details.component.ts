import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  id?: any;
  employee?: Employee;

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,){

  }
  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
     });
   }
  
}
