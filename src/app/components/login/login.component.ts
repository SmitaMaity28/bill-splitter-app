import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string="";
  password: string="";
  constructor(private router: Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }
  login()
  {
    if(this.password === localStorage.getItem(this.email))
    {
      this.toastr.success('Login Sucesss', 'You are now logged in.', {
        timeOut: 3000,
        tapToDismiss:true
      });
      localStorage.setItem('logined',this.email)
      this.router.navigate(['/home'])
    }
    else{
      this.toastr.error('Login Failed', 'Username or Password is incorrect', {
        timeOut: 3000,
        tapToDismiss:true
      });
    }
  }
  signup()
  {
      this.router.navigate(['/signup'])
  }
}
