import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeetaskComponent } from 'src/app/employee/employeetask/employeetask.component';
import { TasktobedisplayedComponent } from 'src/app/employee/tasktobedisplayed/tasktobedisplayed.component';
import { AskqueryComponent } from 'src/app/employee/askquery/askquery.component';
import {ImportModule} from 'src/app/import/import.module';
import {EmployeeRoutingModule} from './employee-routing.module';
const modules=[
  EmployeetaskComponent,
    TasktobedisplayedComponent,
    AskqueryComponent 
]

@NgModule({
  declarations: [
    modules
  ],
  imports: [
    CommonModule,
    ImportModule,
    EmployeeRoutingModule
  ],
  exports:[
    modules
  ]
})
export class EmployeeModule { }
