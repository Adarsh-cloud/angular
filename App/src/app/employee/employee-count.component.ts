import { Component, OnInit, Testability, Input , EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  selectedRadioButtonValue = 'all';
  @Output()
  countRadioButtonValueChange: EventEmitter <string> = new EventEmitter<string>();

  @Input()
  all: number;
  @Input()
  male: number  ;
  @Input()
  female: number ;

  constructor() { }

  ngOnInit() {
  }
  countRadioButtonVaueChanged() {
    this.countRadioButtonValueChange.emit(this.selectedRadioButtonValue);
  }

}
