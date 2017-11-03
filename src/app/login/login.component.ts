import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidCredentials: boolean = false;
  constructor(private loginService: UserService, private router : Router) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    let user : User = new User();
    user.username = this.loginForm.get('username').value;
    user.password = this.loginForm.get('password').value;
    user.token = "";
    
    this.loginService.attemptLogin(user)
    .subscribe((data) => {
      this.router.navigate(['/updateDrug']);
    }, (err) => {
      this.invalidCredentials = true;
    });
  }
}
