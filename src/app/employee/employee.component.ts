import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {EmployeedataService} from '../core/services/employeedata.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employee: Employee ;
  public employees: Employee[] ;

  constructor(private employeeService: EmployeedataService) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe((emps: Employee[]) => this.employees = emps);
  }

  selected(employee: any) {
    this.employee = employee;
  }
}
