import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countries = ['America', 'Bhutan', 'China', 'England', 'India', 'Russia', 'Sri Lanka'];

  user: User = new User();

  constructor(private authenticationService: AuthenticationService, private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.addUser();
  }
  addUser(): void {
   
    this.authenticationService.addUser(this.user).subscribe(res => {
     
      if (res) {
        alert("Registered Successfully!!")
        this.toastr.success('Account Registered Successfully');
        this.user = new User();
      }
    }, err => {
      console.log(err);
    })

  }

}
