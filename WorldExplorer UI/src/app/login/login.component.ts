import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: any;
  form: any;
  user: User = new User();
  bearerToken: any;

  constructor(private router: Router, private authenticationService: AuthenticationService, private toastr: ToastrService) 
  {
    this.title = "Login";
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }

    );
  }
  validate(): void {
    this.authenticationService.validateUser(this.user.email, this.user.password).subscribe(response => {
      if (response) {
        alert("Logged in successfully");
        this.toastr.success('LogggedIn Successfully');
        console.log(response);
       // console.log(response['token']);
        this.bearerToken = response['token'];
        this.authenticationService.setBearerToken(this.bearerToken);
        this.authenticationService.setUserId(this.user.email);
        this.authenticationService.setStatus(true);
        this.router.navigate(['home']);

      }


    }, error => {
      alert("Incorrect Username or Password!!")
      console.log(error);
    });
  }
}
