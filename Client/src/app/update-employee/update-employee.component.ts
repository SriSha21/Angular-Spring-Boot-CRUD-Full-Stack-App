import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/employee.service';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  id!: number;
  employee!: Employee;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      console.log("test",this.employee)
    }, error => console.error(error));
  }

  onSubmit() {
    this.updateEmployee();
  }
  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.gotoEmployeeList();
    }, error => console.error(error));
  }
  gotoEmployeeList() {
    this.router.navigate(['/employees'])
  }
}
