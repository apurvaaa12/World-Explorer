import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck{

  status:any;

  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.status= this.authenticationService.getStatus();
  }
  ngDoCheck() {
    this.ngOnInit();
   
  }
}
