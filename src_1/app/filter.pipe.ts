import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: {firstname:string}[],firstname:string): any {
    console.log("employees"+firstname);
    return (firstname && firstname !=='all')?
    employees.filter(_ => _.firstname === firstname):
    employees;
  }

  


}
