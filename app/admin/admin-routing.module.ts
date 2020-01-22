import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AdminfunctionComponent} from './adminfunction/adminfunction.component';
import {EmployeeregisterComponent} from './employeeregister/employeeregister.component';
import {EmployeeupdateComponent} from './employeeupdate/employeeupdate.component'; 
import {ProjectcreationComponent} from './projectcreation/projectcreation.component';
import {TeamcreationComponent} from './teamcreation/teamcreation.component';

const routes:Routes=[
    {path:'admin',component:AdminfunctionComponent,
children:[
    {path:'employeeregister',component:EmployeeregisterComponent},
    {path:'employeeupdate',component:EmployeeupdateComponent},
    {path:'projectcreation',component:ProjectcreationComponent},
    {path:'teamcreation',component:TeamcreationComponent}
]}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdminRoutingModule{}

 