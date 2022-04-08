import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin = new EventEmitter<boolean>();

  private Admin: {login: string, password: string} =
    {
      login: 'admin',
      password: 'admin'
    }

  constructor() { }


  checkLoginAdmin(login: string, pass: string) :boolean {
    if (this.Admin.login === login && this.Admin.password === pass)
      return true;
    return false;
  }

  isLoginFunction(): boolean {
    this.isLogin.subscribe(val => {
      if(val)
        return true;
      return false;
    })
    return false;
  }

}
