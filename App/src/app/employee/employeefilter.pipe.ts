import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeefilter'
})
export class EmployeefilterPipe implements PipeTransform {

  transform(employees , searchTerm: string ): any {
    if (!employees || !searchTerm) {
        return employees;
    }
    return employees.filter(emp => emp.name.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);

  }

}
