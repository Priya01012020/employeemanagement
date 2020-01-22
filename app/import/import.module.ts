import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import { MatRippleModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatCheckboxModule} from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const modules = [
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatSelectModule,
  MatStepperModule,
  FormsModule,
  ReactiveFormsModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatExpansionModule,
  MatSlideToggleModule
  // MatSnackBarModule,
  // MatSnackBar
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    modules
  ]
})
export class ImportModule { }
