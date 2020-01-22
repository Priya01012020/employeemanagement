import { Component, OnInit, NgModuleFactoryLoader } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminfunction',
  templateUrl: './adminfunction.component.html',
  styleUrls: ['./adminfunction.component.css']
})
export class AdminfunctionComponent implements OnInit {

  constructor(private router:Router,private readonly loader: NgModuleFactoryLoader) { }

  ngOnInit() {
  }
 
}
