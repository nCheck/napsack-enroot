import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donator-donate',
  templateUrl: './donator-donate.component.html',
  styleUrls: ['./donator-donate.component.css']
})
export class DonatorDonateComponent implements OnInit {

  cardboard:Number=0;
  tetraPack:Number=0;
  glassBottle:Number=0;
  plasticBottle:Number=0;
  selection:Number[]=[];
  onSubmission():void{
    this.selection.push(this.tetraPack);
    this.selection.push(this.cardboard);
    this.selection.push(this.glassBottle);
    this.selection.push(this.plasticBottle);

    console.log(this.selection);

  };

  constructor() { }

  ngOnInit() {

  }

}
