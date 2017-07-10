import { Component, OnInit } from '@angular/core';

import { Employee } from '../_models/index';
import { EmployeeService } from '../_services/index';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {

           // get users from secure api end point
        this.employeeService.getEmployees()
            .subscribe(employees => {
                this.employees = employees;
            });
 
  }

}
