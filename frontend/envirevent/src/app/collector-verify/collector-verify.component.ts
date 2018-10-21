import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { BarcodeFormat } from '@zxing/library';
import { DataService } from '../data.service';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
@Component({
  selector: 'app-collector-verify',
  templateUrl: './collector-verify.component.html',
  styleUrls: ['./collector-verify.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CollectorVerifyComponent implements OnInit {

    public show: boolean = false;

  constructor() { }

  ngOnInit() {
    }

    toggle() 
    {
        this.show = !this.show;
    }

}
