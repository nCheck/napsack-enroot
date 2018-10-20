import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  displaylog:string="block";
  displayreg:string="none";
  regSwap():void{
    this.displayreg="block";
    this.displaylog="none";
  }
  logSwap():void{
    this.displayreg="none";
    this.displaylog="block";
  }
  constructor() { }

  ngOnInit() {
  }

}
