import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import {Router} from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-employeeregister',
  templateUrl: './employeeregister.component.html',
  styleUrls: ['./employeeregister.component.css']
})
export class EmployeeregisterComponent implements OnInit {
  firstFormGroup: FormGroup;
secondFormGroup:FormGroup;
thirdFormGroup:FormGroup;
fourthFormGroup:FormGroup;
fifthFormGroup:FormGroup;
sixthFormGroup:FormGroup;
majors:string[];

qualification:any;


beoptions:string[]=['CSE','MECH','ECE','EEE'];
btechoptions:string[]=['IT','BT'];
options:string[]=['B.E','B.Tech'];
  orders = [];
  roleid: string;
  activestatus: string;
  constructor(private formBuilder: FormBuilder,private user:UserService,private router:Router) { }
   ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      mail: ['', Validators.compose([Validators.required, Validators.email])],
      mobile: ['', Validators.required]
    });
    
    this.qualification = this.formBuilder.group({
      course: ['' , Validators.required],
      major: ['', Validators.required],
      experience:['',Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      role: ['', Validators.required]
    });
    this.fifthFormGroup = this.formBuilder.group({
      uname: ['', Validators.required],
      pwd:['',Validators.required]
    });
    this.sixthFormGroup = this.formBuilder.group({
      status: ['', Validators.required]
     
    });
  }
  display1()
  {
    console.log(this.qualification.value.course);
    if(this.qualification.value.course==='B.E')
    {
     
      this.majors  = Object.assign([], this.beoptions);
      
    }
    if(this.qualification.value.course==='B.Tech')
    {
     
      this.majors  = Object.assign([], this.btechoptions);
      
    }
}

insert()
{
  
switch(this.fourthFormGroup.value.role)
{
  case 'manager':
    this.roleid="1";
    break;
    case 'tl':
    this.roleid="2";
    break;
    case 'employee':
    this.roleid="3";
    break;
}
  if(this.sixthFormGroup.value.status=="1")
  {
    this.activestatus="active";
  }
  else
  {
    this.activestatus="inactive";
  }
const d={ename : this.firstFormGroup.value.name,
   rolename: this.roleid ,
   userId:this.fifthFormGroup.value.uname,
   passwords:this.fifthFormGroup.value.pwd,
   gender: this.firstFormGroup.value.gender ,  
   mobno: this.secondFormGroup.value.mobile, 
   mailid: this.secondFormGroup.value.mail, 
   dob: this.firstFormGroup.value.dob , 
   address: this.firstFormGroup.value.address , 
   qualification:this.qualification.value.course, 
   qualmajor: this.qualification.value.major,
   experience:this.qualification.value.experience,
   employeestatus:this.activestatus
  }
console.log(d)
this.user.PostMethod('employee/insert', d).subscribe((data) => {
  console.log(data);
});
}
}