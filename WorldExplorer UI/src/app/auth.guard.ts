import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private authservice:AuthenticationService,private router:Router){}
 
/*
 canActivate():boolean{
  if(this.authservice.loggedIn()){
    return true
  }
  else{
    this.router.navigate(['/login'])
    return false
  }
 }*/
 canActivate():boolean {

    if(this.authservice.loggedIn()){
      return true
    }
    else{
      //this.router.navigate(['/login'])
      return false
    }
  
}

}
