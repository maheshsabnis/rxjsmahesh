import { Component, OnInit } from '@angular/core';
import { Observable,Observer, from } from 'rxjs';
import { filter, map, of } from 'rxjs';
import { Employee,Employees } from '../models/app.emp.model';
import { CommonModule } from '@angular/common';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-employeefilter',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './employeefilter.component.html',
  styleUrls: ['./employeefilter.component.css']
})
export class EmployeefilterComponent implements OnInit {
  employees$:Observable<Employee>;
  emps = Employees;
  empsData : Employee[];



  mapeData :any;
  constructor() {
    this.employees$ = new Observable<Employee>();
    this.empsData = [];
    this.mapeData = [];



  }

  ngOnInit() {

  }

  filterEmployees():void {
    this.employees$ = from(this.emps).pipe(
        filter((emp)=> emp.DeptName === 'HR')
      );
      // now add data into array
    this.employees$.forEach((v)=>{
      this.empsData.push(v);
    });

  }

}
