import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminfunctionComponent } from 'src/app/admin/adminfunction/adminfunction.component';
import { EmployeeregisterComponent } from 'src/app/admin/employeeregister/employeeregister.component';
import {ImportModule} from 'src/app/import/import.module';
import {EmployeeupdateComponent} from './employeeupdate/employeeupdate.component';
import {ProjectcreationComponent} from './projectcreation/projectcreation.component';
import {TeamcreationComponent} from './teamcreation/teamcreation.component';
import {AdminRoutingModule} from './admin-routing.module';
const modules=[
  AdminfunctionComponent,
  EmployeeregisterComponent,
  EmployeeupdateComponent,
  ProjectcreationComponent,
  TeamcreationComponent
]

@NgModule({
  declarations: [
    modules
    
  ],
  imports: [
    CommonModule,
    ImportModule,
    AdminRoutingModule
  ],
  exports:[
    
  ]
})
export class AdminModule { }
