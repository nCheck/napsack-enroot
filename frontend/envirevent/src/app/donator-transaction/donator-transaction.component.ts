import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-donator-transaction',
  templateUrl: './donator-transaction.component.html',
  styleUrls: ['./donator-transaction.component.css']
})
export class DonatorTransactionComponent implements OnInit {

  public show: boolean = false;
  public showA: boolean = false;
 
  constructor(private data: DataService) {

  }
  
  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;

  }

  toggleA() {
    this.showA = !this.showA;

  }

}
