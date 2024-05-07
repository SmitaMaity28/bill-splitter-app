import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string="";
  email: string="";
  password: string="";
  confirmPassword:string="";

  constructor(private router: Router,private toaster: ToastrService) { }

  ngOnInit(): void {

  }
  submit() {

    console.log(this.name,this.email,this.password,this.confirmPassword);
    if(this.confirmPassword == this.password) {

            localStorage.setItem(this.email,this.password);
            this.toaster.success("success","Registration successful")
            this.router.navigate(['/login']);

    }
    else{
      // alert("password doenot match with confirm pass")
      this.confirmPassword="";
      this.password ="";
      this.toaster.error("Registration Falied","Password doenot match with confirm password")
    }
  }
  login() {
      this.router.navigate(['/login']);
  }

}
