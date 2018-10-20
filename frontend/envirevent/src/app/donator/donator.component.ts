import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donator',
  templateUrl: './donator.component.html',
  styleUrls: ['./donator.component.css']
})
export class DonatorComponent implements OnInit {
  _opened: boolean = false;
  slide:string="slide";
  isActive:boolean=false;
  show: boolean = false;
  _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor() { }

  ngOnInit() {
  }

}
