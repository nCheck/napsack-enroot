import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-collector-wallet',
  templateUrl: './collector-wallet.component.html',
  styleUrls: ['./collector-wallet.component.css']
})
export class CollectorWalletComponent implements OnInit {
  addition:String="green";
  subtraction:String="red";
  constructor() { }

  ngOnInit() {
  }

}
