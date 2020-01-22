import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-projectcreation',
  templateUrl: './projectcreation.component.html',
  styleUrls: ['./projectcreation.component.css']
})
export class ProjectcreationComponent implements OnInit {
  firstFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      id: ['',Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

}
