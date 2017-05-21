import { Employee } from './employee';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emp'
})
export class EmpPipe implements PipeTransform {

  transform(value: Employee): any {
//    if (value instanceof Employee) {
      return value.firstName +" "+ value.lastName;
//    }
//    return 'non-emp';
  }

}
