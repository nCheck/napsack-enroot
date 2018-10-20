import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  displaylog:string="block";
  displayreg:string="none";
  id:Number=1;
  usernameLogin:String="";
  passwordLogin:String="";
  checkBox:Number=1;
dataPOST={};

  
  regSwap():void{
    this.displayreg="block";
    this.displaylog="none";
  }
  logSwap():void{
    this.displayreg="none";
    this.displaylog="block";
  }
  addClass(id: Number) {
    this.id = id;
}
loginClick():void{
  this.dataPOST={
    "username":this.usernameLogin,
    "password":this.passwordLogin,
    "type":"login",
  }
  this.data.postLoginData(this.dataPOST);
  this.dataPOST={};
  console.log("login clicked");

}

regClick():void{
 var regType:String="" ;
  if(this.checkBox==2)
    regType="Collector";
  else
    regType="Customer";
  this.dataPOST={
    "username":this.usernameLogin,
    "password":this.passwordLogin,
    "role":regType,
    "type":"register",
  }
  this.data.postRegData(this.dataPOST);
  this.dataPOST={};
  console.log("register clicked");

}
onSelectCheckBox(id:Number){
  this.checkBox=id;
}

  constructor(private data:DataService) { }

  ngOnInit() {
  }

}
