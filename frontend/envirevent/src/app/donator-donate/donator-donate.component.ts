import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
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
    console.log(this.data.postDonateData(this.selection));
    this.data.getDonateData().subscribe((product:any)=>{
      console.log(product);
    });

    // this.data.postDonateData().subscribe((dat:any)=>{
    //   dat => console.log(dat);
    // });
    this.selection=[];
  }


  constructor(private data:DataService) { 

  }

  ngOnInit() {

  }

}
