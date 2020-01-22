import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent implements OnInit {
  firstFormGroup: FormGroup;
  i:number;
  roleid: string;
  activestatus: string; 
  constructor(private formBuilder: FormBuilder,private user:UserService,private router:Router) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      uname: ['', Validators.required],
      address: ['', Validators.required],
      role: ['', Validators.required],
      mail:['',Validators.compose([Validators.required, Validators.email])],
      mobile:['',Validators.required],
      status:['',Validators.required]
    });
  }
  updateStatus()
{
  this.i=5;
}
updateMobile()
{
  this.i=4;
}
updateMail()
{
  this.i=3;
}
updateRole()
{
  this.i=2;
}
  updateAddress()
  {
    this.i=1;
  }
  updateDetails()
  {
    console.log(this.firstFormGroup.value.role);
    switch(this.firstFormGroup.value.role)
    {
       case "manager":
        this.roleid="1";
        console.log(this.roleid);
        console.log('Manager');
        break;
        case "tl":
        this.roleid="2";
        console.log('tl');
        break;
        case "employee":
        this.roleid="3";
        console.log('emp');
        break;
    }    
    if(this.firstFormGroup.value.status=="1")
    {
      this.activestatus="active";
    }
    else
    {
      this.activestatus="inactive";
    }
    const d =
    {
      userId : this.firstFormGroup.value.uname,    
      address:this.firstFormGroup.value.address,
      rolename:this.roleid,
      mailid:this.firstFormGroup.value.mail,
      mobno:this.firstFormGroup.value.mobile,
      employeestatus:this.activestatus
    }     

     console.log(d);
  
   this.user.PostMethod('employee/other/update', d).subscribe((data) => {
     console.log(data);
   });
  }
}