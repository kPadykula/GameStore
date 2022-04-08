import { Component, OnInit } from '@angular/core';
import {LoginService} from "../shared/services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.isLogin.subscribe(val => {
      this.isLogin = val;
    });
  }

  onLogout() {
    this.loginService.isLogin.emit(false);
  }
}
