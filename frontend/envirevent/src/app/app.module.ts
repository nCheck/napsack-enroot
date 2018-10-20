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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
