import { Component, OnInit } from '@angular/core';
import {LoginService} from "../shared/services/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin = false;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.isLogin = this.loginService.isLoginBool;
    this.loginService.isLogin.subscribe((item) => this.isLogin = item )
  }

}
