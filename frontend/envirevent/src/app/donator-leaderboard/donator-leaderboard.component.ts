import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-donator-leaderboard',
  templateUrl: './donator-leaderboard.component.html',
  styleUrls: ['./donator-leaderboard.component.css']
})
export class DonatorLeaderboardComponent implements OnInit {
    leaderboard:any[];

    filter(i:Number):boolean{
      if(i>3)
      return false;
      else
      return true;
    }

    color(i:Number):string{
      if(i==1)
        return "gold";
      else if(i==2)
        return "silver";
      else
        return "brown";

    }
    initLeaderBoard():void{
      console.log("hello");
      this.data.getLeaderboardData().subscribe((placesData: any[]) => {
        this.leaderboard = placesData;
        console.log(this.leaderboard);
        console.log("crappy"); 
      });
    }
  constructor(public data:DataService) { 
    this.initLeaderBoard();
  } 

  ngOnInit() {


  }

}
