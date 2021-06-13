import {Injectable} from '@angular/core';
import {Employee} from '../../employee';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

  constructor() {
  }

  employees: Employee[] = [
    {
      id: 1,
      name: 'Test Name1',
      email: 'Test Address',
      address: 'jjjj'
    },
    {
      id: 1,
      name: 'Test Name2',
      email: 'Test Address2',
      address: 'bbbb'
    },
    {
      id: 1,
      name: 'Test Name3',
      email: 'Test Address3',
      address: 'cccc'
    }
  ];

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }
}
