import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  selectedTerm: string;
  selectedRadioButtonValue = 'All';
   employees =
  [
    {
      code: 'emp101', name: 'Tom', gender: 'Male',
     annualSalary: 5500, dateOfBirth: '6/25/1988'

    },

    {
       code: 'emp102', name: 'Alex', gender: 'Male',

        annualSalary: 5700.95, dateOfBirth: '9/6/1982'

    },

    {

        code: 'emp103', name: 'Mike', gender: 'Male',

        annualSalary: 5900, dateOfBirth: '12/8/1979'

    },

    {

        code: 'emp104', name: 'Mary', gender: 'Female',

        annualSalary: 6500.826, dateOfBirth: '10/14/1980'

    },

    {

        code: 'emp105', name: 'Nancy', gender: 'Female',

        annualSalary: 6700.826, dateOfBirth: '12/15/1982'

    },

    {

      code: 'emp105', name: 'Nancy', gender: 'Female',

      annualSalary: 6700.826, dateOfBirth: '12/15/1982'

  }
  ];
  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
  getAllemployeesCount(): number {
    return this.employees.length;
  }
  getMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Male').length;
  }
  getFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Female').length;
  }
  onRadioButtonValueChange(value: string ) {
    console.log(value);
    this.selectedRadioButtonValue = value;

  }
}
