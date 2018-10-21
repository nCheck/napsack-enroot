import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-donator-mainpage',
  templateUrl: './donator-mainpage.component.html',
  styleUrls: ['./donator-mainpage.component.css']
})
export class DonatorMainpageComponent implements OnInit {

  constructor( private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }

}
