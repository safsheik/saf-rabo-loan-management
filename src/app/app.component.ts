import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'saf-loan';
  role = '';
  showLogin = true;
  loggedInUser = '';
//{usrname: usrname, number: number}
  onLogin(logStatus) {
    this.loggedInUser = logStatus.usrname;
    console.log("$$$$ SAF, after login: user is: "+logStatus.usrname);
    if(logStatus.number === 1) {
      this.role = 'admin';
      this.showLogin = false;
    } else if(logStatus.number === 2) {
      this.role = 'normal';
      this.showLogin = false;
    } else {
      this.role ='Not Logged In!';
    }
  }
}
