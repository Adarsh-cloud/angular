import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmpComponent } from './emp/emp.component';
import { EmployeeCountComponent } from './employee/employee-count.component';
import { ColorDirectiveDirective } from './color-directive.directive';
import { ChangeCaseDirective } from './changecase.directive';
import { DemoDirective } from './demo.directive';
import { EmployeeTitlePipe } from './employee-title.pipe';
import { EmployeefilterPipe } from './employee/employeefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmpComponent,
    EmployeeCountComponent,
    ColorDirectiveDirective,
    ChangeCaseDirective,
    DemoDirective,
    EmployeeTitlePipe,
    EmployeefilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
