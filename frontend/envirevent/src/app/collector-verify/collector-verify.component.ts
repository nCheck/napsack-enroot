import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { DataService } from '../data.service';
import { Data } from '@angular/router';
@Component({
  selector: 'app-collector-verify',
  templateUrl: './collector-verify.component.html',
  styleUrls: ['./collector-verify.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CollectorVerifyComponent implements OnInit {

  public numKey: String;
  public val: String;

  constructor(data: DataService) {

      }

  ngOnInit() 
  {

  }



}
