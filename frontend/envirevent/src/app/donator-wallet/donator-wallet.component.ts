import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-donator-wallet',
  templateUrl: './donator-wallet.component.html',
  styleUrls: ['./donator-wallet.component.css']
})
export class DonatorWalletComponent implements OnInit {
  addition:String="green";
  subtraction:String="red";
  constructor(private data:DataService) { 

  }

  ngOnInit() {
  }

}
