import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collector',
  templateUrl: './collector.component.html',
  styleUrls: ['./collector.component.css']
})
export class CollectorComponent implements OnInit {
  _opened: boolean = false;
  slide:string="slide";
  isActive:boolean=false;
  show: boolean = false;
  _toggleSidebar() {
    this._opened = !this._opened;
    console.log("hi");
    console.log(this._opened)
  }
  constructor() { }

  ngOnInit() {
  }

}
