import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TasktobedisplayedComponent} from '../tasktobedisplayed/tasktobedisplayed.component';
import {VERSION} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
export interface data {

  data: string;
}

@Component({
  selector: 'app-employeetask',
  templateUrl: './employeetask.component.html',
  styleUrls: ['./employeetask.component.css']
})
export class EmployeetaskComponent implements OnInit {
  version = VERSION;
  firstFormGroup: FormGroup;
  fileNameDialogRef: MatDialogRef<TasktobedisplayedComponent>;

  constructor(private dialog: MatDialog,private formBuilder: FormBuilder) {}

 ngOnInit()
 {
  this.firstFormGroup = this.formBuilder.group({
    status: ['', Validators.required],
    query: ['', Validators.required],
    checked: ['', Validators.required]
  });
   }
 displayTask()
 {
  this.fileNameDialogRef = this.dialog.open(TasktobedisplayedComponent);
}
 }



