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
  placesArray:any;
  
  constructor(private data:DataService) { 

  }

  onSubmit():void{
    this.data.getWalletData().subscribe((placesData: any) => {
      this.placesArray = placesData;

      console.log(this.placesArray);
      console.log("crappy"); 
    });
  }

  ngOnInit() {
    this.onSubmit();
  }

}
