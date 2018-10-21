import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DonatorComponent } from './donator/donator.component';
import { CollectorComponent } from './collector/collector.component';
import { DonatorDonateComponent } from './donator-donate/donator-donate.component';
import { DonatorTransactionComponent } from './donator-transaction/donator-transaction.component';
import { DonatorWalletComponent } from './donator-wallet/donator-wallet.component';
import { DonatorQuestComponent } from './donator-quest/donator-quest.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidebarModule } from 'ng-sidebar';
import { MainLoginComponent } from './main-login/main-login.component';
import { FormsModule } from '@angular/forms';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CollectorVerifyComponent } from './collector-verify/collector-verify.component';
import { CollectorRequestComponent } from './collector-request/collector-request.component';
import { CollectorWalletComponent } from './collector-wallet/collector-wallet.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { QRCodeModule } from 'angularx-qrcode';
import { DonatorQrcodeComponent } from './donator-qrcode/donator-qrcode.component';
import { CollectordetailsComponent } from './collectordetails/collectordetails.component';
import { DonatorLeaderboardComponent } from './donator-leaderboard/donator-leaderboard.component';
import {ProgressBarModule} from 'angular-progress-bar';
import { DonatorMainpageComponent } from './donator-mainpage/donator-mainpage.component';
import { CollectorMainpageComponent } from './collector-mainpage/collector-mainpage.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgxBarcodeModule } from 'ngx-barcode';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
// import * as RX from "rxjs/Observable";


@NgModule({
  declarations: [
    DonatorComponent,
    CollectorComponent,
    DonatorDonateComponent,
    DonatorTransactionComponent,
    DonatorWalletComponent,
    DonatorQuestComponent,
    AppComponent,
    LoginComponent,
    MainLoginComponent,
    MapsComponent,
    CollectorVerifyComponent,
    CollectorRequestComponent,
    CollectorWalletComponent,
    DonatorQrcodeComponent,
    CollectordetailsComponent,
    DonatorLeaderboardComponent,
    DonatorMainpageComponent,
    CollectorMainpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ZXingScannerModule,
    BarecodeScannerLivestreamModule,
    NgxBarcodeModule,
    // HttpClient,
    HttpModule,
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'
    }),
    NgQrScannerModule,
    QRCodeModule,
    ProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
