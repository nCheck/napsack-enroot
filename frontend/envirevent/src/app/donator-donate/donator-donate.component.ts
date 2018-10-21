import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-donator-donate',
  templateUrl: './donator-donate.component.html',
  styleUrls: ['./donator-donate.component.css']
})
export class DonatorDonateComponent implements OnInit {

  cardboard: Number = 0;
  tetraPack: Number = 0;
  glassBottle: Number = 0;
  plasticBottle: Number = 0;
  selection: Number[] = [];
  placesArray: any;
  dataPOST = {};
  public show:boolean = false;


  onSubmission(): void {
    this.selection.push(this.tetraPack);
    this.selection.push(this.cardboard);
    this.selection.push(this.glassBottle);
    this.selection.push(this.plasticBottle);
    this.dataPOST = {
      "Card board Box": this.cardboard,
      "TetraPacks":this.tetraPack,
      "Plastic Bottle": this.plasticBottle,
      "Glass Bottle": this.glassBottle,
    }

    console.log(this.selection);
    console.log(this.data.postDonateData(this.dataPOST));
    
    

    // this.data.getLeaderboardData().subscribe((placesData: String) => {
    //   this.placesArray = placesData;
    //   console.log(this.placesArray);
    //   console.log("crappy"); 
    // });

    // this.data.postDonateData().subscribe((dat:any)=>{
    //   dat => console.log(dat);
    // });
    this.data.postDonateData(this.dataPOST).subscribe((placesData: any) => { 
      this.placesArray=placesData;
      this.data.uniqueValue=this.placesArray.code; 
      console.log(this.placesArray.code); 
      this.router.navigate(['donor/complete']); 

    this.selection = [];
    this.dataPOST = {};
  });
  }
  constructor(private route: ActivatedRoute,private router: Router,private data:DataService) { }


  ngOnInit() {

  }

}
