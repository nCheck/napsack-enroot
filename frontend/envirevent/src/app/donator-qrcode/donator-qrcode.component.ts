import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-donator-qrcode',
  templateUrl: './donator-qrcode.component.html',
  styleUrls: ['./donator-qrcode.component.css']
})

export class DonatorQrcodeComponent implements OnInit {
  public myAngular: String = null;

  constructor(data: DataService) {
       this.myAngular = data.uniqueValue;
   }

  ngOnInit() {
  }

}
