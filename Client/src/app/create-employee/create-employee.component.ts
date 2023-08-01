import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/employee.service';
import { Employee } from '../Employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailId: ['', Validators.required],
    address: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit() {
    this.saveEmployee();
  }
  saveEmployee() {
    let payload = this.profileForm.value;
    this.employeeService.createEmployee(payload).subscribe(data => {
      this.gotoEmployeeList();
    }, error => console.error(error));
  }
  gotoEmployeeList() {
    this.router.navigate(['/employees'])
  }
}
