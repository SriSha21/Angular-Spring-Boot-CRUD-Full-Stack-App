import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/employee.service';
import { Employee } from '../Employee.model';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  employeeData: Employee[] = [];
  constructor(private employeeService: EmployeeService, private router: Router) {
  }
  ngOnInit(): void {
    this.getAllEmployee();
  }
  getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe((res: HttpResponse<Employee[]>) => {
      this.employeeData = res.body!;
      console.log("employee", this.employeeData);
    })
  }
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id])
  }
  view(id: number) {
    this.router.navigate(['employee-details', id])
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getAllEmployee();
    })
  }

}
