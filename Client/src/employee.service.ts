import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './app/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private url = "http://localhost:8080/api/v1/employees";
  constructor(private http: HttpClient,) { }

  getAllEmployee(): Observable<any> {
    return this.http.get<Employee>(
      `${this.url}`,
      { observe: 'response' }
    );
  }
  createEmployee(emp: any): Observable<any> {
    return this.http.post<Employee>(
      `${this.url}`,emp,
      { observe: 'response'}
    );
  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  updateEmployee(id:number,emp: any): Observable<any> {
    return this.http.put(
      `${this.url}/${id}`,emp,
      { observe: 'response'}
    );
  }
  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`,{ observe: 'response'}
    );
  }
}
