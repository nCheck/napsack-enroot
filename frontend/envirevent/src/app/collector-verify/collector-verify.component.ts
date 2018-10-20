import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';

@Component({
  selector: 'app-collector-verify',
  templateUrl: './collector-verify.component.html',
  styleUrls: ['./collector-verify.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CollectorVerifyComponent implements OnInit {

  constructor() { }

  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;

  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
          if (device.kind.toString() === 'videoinput') {
              videoDevices.push(device);
          }
      }
      if (videoDevices.length > 0) {
          let choosenDev;
          for (const dev of videoDevices) {
              if (dev.label.includes('front')) {
                  choosenDev = dev;
                  break;
              }
          }
          if (choosenDev) {
              this.qrScannerComponent.chooseCamera.next(choosenDev);
          } else {
              this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
          }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
        console.log(result);
    });

    }
}
