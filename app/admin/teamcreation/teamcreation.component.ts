import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-teamcreation',
  templateUrl: './teamcreation.component.html',
  styleUrls: ['./teamcreation.component.css']
})
export class TeamcreationComponent implements OnInit {
firstFormGroup:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      Pid: ['',Validators.required],
      Eid: ['',Validators.required]
    });
  }

}
