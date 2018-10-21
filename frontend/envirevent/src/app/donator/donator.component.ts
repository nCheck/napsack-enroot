import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  reroute():void{
    this.router.navigate(['/login']);
  }
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }

}
