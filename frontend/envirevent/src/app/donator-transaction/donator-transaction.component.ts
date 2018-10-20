import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-donator-transaction',
  templateUrl: './donator-transaction.component.html',
  styleUrls: ['./donator-transaction.component.css']
})
export class DonatorTransactionComponent implements OnInit {

  constructor(private data:DataService) { 

  }

  ngOnInit() {
  }

}
