import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './tokeninterceptor.service';
import { NextpageComponent } from './nextpage/nextpage.component';
import {ImportModule} from './import/import.module';
import {AdminModule} from './admin/admin.module';
import {EmployeeModule} from './employee/employee.module';
import {TasktobedisplayedComponent} from './employee/tasktobedisplayed/tasktobedisplayed.component';
import {AskqueryComponent} from './employee/askquery/askquery.component';
import {HomeComponent} from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NextpageComponent,
    HomeComponent
   ],
  imports: [
     ImportModule,
    AdminModule,   
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    EmployeeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:
  [
    TasktobedisplayedComponent,
    AskqueryComponent
  ]
})
export class AppModule { }
