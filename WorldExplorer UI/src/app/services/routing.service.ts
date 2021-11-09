import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService implements CanActivate{

  constructor(private authenticationService : AuthenticationService, private router : Router) { }
  canActivate()
  {
     if(this.authenticationService.getStatus())
     {
       return true;
     }
     this.router.navigate(['login']);
     return false;   
  }
}
