import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'MR' + name;
    }
    if (gender.toLowerCase() === 'female') {
      return  'Miss' + name;
    }
    return null;
  }

}
