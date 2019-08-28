import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  employee = {
    firstName: 'tom',
    lastName: 'Hastings',
    gender: 'male',
    age: 22
};
showDetails = false;

  constructor() { }
  toggleDetails() {
  this.showDetails = !this.showDetails;
  }
  ngOnInit() {
  }

}
