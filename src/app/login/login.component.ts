import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = '';
  @Output() loginStatus  = new EventEmitter<{usrname: string, number: number}>();
  userPwd = '';
  loginState = 0;
  

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log("$$$$ SAF: userName is "+this.userName);
    
    if(this.userName === "saf") {
      this.loginState = 1;
    } else if(this.userName === "sheik") {
      this.loginState = 2;
    }
    this.loginStatus.emit({usrname: this.userName, number : this.loginState});
  }

  onReset() {
    this.userName = "";
    this.userPwd = "";
  }
  
  isLoggedIn() {
    return this.loginStatus === "admin"? true: false;
  }

}
