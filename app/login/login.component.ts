import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { StatusService } from '../status.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(){  }

  constructor(private user: UserService, private statusService: StatusService,private router:Router) { }
  login( name: string,passwords: string) {
    console.log("inside");
       const d = {
     userId : name,
      passwords: passwords
    };
  this.user.PostMethod('employee/validate', d).subscribe((data: any) => {  
      console.log(data);
      if(data){
        localStorage.setItem('token',JSON.stringify(data.response.access));
        //this.router.navigate(['/nextpage']);
        if(data.response.rolename==3)
        {
        this.router.navigate(['/employee']);
        }
        else if(data.response.rolename==2){
          this.router.navigate(['/nextpage']);
        }
        else if(data.response.rolename==1){
          this.router.navigate(['/admin']);
        }
      }
      else{
        localStorage.setItem('token',null);
      }
      
    },
    (err: any) => {
      console.log('error', +err);
    });
  }
  }


