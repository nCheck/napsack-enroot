import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donator-donate',
  templateUrl: './donator-donate.component.html',
  styleUrls: ['./donator-donate.component.css']
})
export class DonatorDonateComponent implements OnInit {

  public choice: Array<any>;

  constructor() { }

  ngOnInit() {
    this.choice = [
      {
         name: 'Glass Bottle',
         value: 'false'
      },
      {
        name: 'Plastic Bottle',
        value: 'false'
      },
      {
        name: 'TetraPacks',
        value: 'false'
      },
      {
        name: 'Card board Box',
        value: 'false'
     },
     {
       name: 'Wrappers',
       value: 'false'
     }
    ];
  }

}
