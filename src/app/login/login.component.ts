import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginService} from "../shared/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {

  }

  onLogin(form: NgForm) {
    let value = form.value;
    console.log(value);
    if(this.loginService.checkLoginAdmin(value.loginInput, value.passwordInput)){
      this.loginService.isLogin.emit(true);
      this.loginService.isLoginBool = true;
      this.router.navigate(['/'])

    }
  }
}
