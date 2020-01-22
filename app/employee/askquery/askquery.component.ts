import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-askquery',
  templateUrl: './askquery.component.html',
  styleUrls: ['./askquery.component.css']
})
export class AskqueryComponent implements OnInit {
  secondFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.secondFormGroup = this.formBuilder.group({
      
      query: ['', Validators.required]
   
    });
  }

}
