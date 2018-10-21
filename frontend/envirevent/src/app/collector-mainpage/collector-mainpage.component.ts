import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-collector-mainpage',
  templateUrl: './collector-mainpage.component.html',
  styleUrls: ['./collector-mainpage.component.css']
})
export class CollectorMainpageComponent implements OnInit {

  constructor( private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }

}
