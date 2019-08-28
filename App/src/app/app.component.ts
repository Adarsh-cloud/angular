import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'App';
 name = 'Tom';
 day = 4 ;
 product = {
 name : 'abc',
 age: 10
 };
 process() {
 alert('Welcome');
 }
 processData(event) {
 this.name = event.target.value;
 }
}
