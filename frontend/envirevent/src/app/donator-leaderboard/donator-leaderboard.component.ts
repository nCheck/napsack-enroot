import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-donator-leaderboard',
  templateUrl: './donator-leaderboard.component.html',
  styleUrls: ['./donator-leaderboard.component.css']
})
export class DonatorLeaderboardComponent implements OnInit {
    leaderboard:any[];
    initLeaderBoard():void{
      this.data.getLeaderboardData().subscribe((product1:any[]) => {
        this.leaderboard = product1; 
        console.log(this.leaderboard); 
    })
    }
  constructor(private data:DataService) { 

  } 

  ngOnInit() {
    this.initLeaderBoard();
  }

}
