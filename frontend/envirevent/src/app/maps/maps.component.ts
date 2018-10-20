import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  // public title = 'My first AGM project';
  lat: Number;
  lng: Number;
  latlng: Number[][] = [];

  constructor() { }

  ngOnInit() {
    this.latlng = [ [19.0728, 72.8978],
                [19.0731395, 72.8968745],
                [19.0726404, 72.8933974],
                [19.0738617, 72.9021073],
                [19.0752614 , 72.8996719]
                ] ;
    this.lat = this.latlng[0][0];
    this.lng = this.latlng[0][1];
  }

}
