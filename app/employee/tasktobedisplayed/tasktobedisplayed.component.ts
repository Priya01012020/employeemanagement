import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AskqueryComponent} from '../askquery/askquery.component';
import {VERSION} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-tasktobedisplayed',
  templateUrl: './tasktobedisplayed.component.html',
  styleUrls: ['./tasktobedisplayed.component.css']
})
export class TasktobedisplayedComponent implements OnInit {
  version = VERSION;

  fileNameDialogRef: MatDialogRef<AskqueryComponent>;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,public dialogRef:MatDialogRef<AskqueryComponent>) {}

   ngOnInit() {
  }
close()
{
  this.dialogRef.close();
}
askquery()
 {
  this.fileNameDialogRef = this.dialog.open(AskqueryComponent);
}
}
