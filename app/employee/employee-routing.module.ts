import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {EmployeetaskComponent} from './employeetask/employeetask.component';
import {AskqueryComponent} from './askquery/askquery.component';
import {TasktobedisplayedComponent} from './tasktobedisplayed/tasktobedisplayed.component';
const routes:Routes=[
    {path:'employee',component:EmployeetaskComponent,
    children: [
        {path:'askquery',component:AskqueryComponent},
{path:'tasktobedisplayed',component:TasktobedisplayedComponent}
    ]}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class EmployeeRoutingModule{}