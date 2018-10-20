import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-donator-quest',
  templateUrl: './donator-quest.component.html',
  styleUrls: ['./donator-quest.component.css']
})
export class DonatorQuestComponent implements OnInit {
  constructor(private data:DataService) { 

  } 
  ngOnInit() {
  }

}
