
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DonatorComponent } from './donator/donator.component';
import { CollectorComponent } from './collector/collector.component';
import { DonatorDonateComponent } from './donator-donate/donator-donate.component';
import { DonatorTransactionComponent } from './donator-transaction/donator-transaction.component';
import { DonatorWalletComponent } from './donator-wallet/donator-wallet.component';
import { DonatorQuestComponent } from './donator-quest/donator-quest.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { MapsComponent } from './maps/maps.component';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { CollectorVerifyComponent } from './collector-verify/collector-verify.component';
import { CollectorRequestComponent } from './collector-request/collector-request.component';
import { CollectorWalletComponent } from './collector-wallet/collector-wallet.component';
import { DonatorQrcodeComponent } from './donator-qrcode/donator-qrcode.component';
import { DonatorLeaderboardComponent } from './donator-leaderboard/donator-leaderboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainLoginComponent
  },
  {
    path: 'donor',
    component: DonatorComponent,
    children: [

      {
        path: '',
        component: DonatorDonateComponent,
      },
      {
        path: 'donate',
        component: DonatorDonateComponent,
      },
      {
        path: 'transact',
        component: DonatorTransactionComponent,
      },
      {
        path: 'wallet',
        component: DonatorWalletComponent,
      },
      {
        path: 'quest',
        component: DonatorQuestComponent,
      },
      {
        path: 'maps',
        component: MapsComponent,
      },
      {
        path: 'complete',
        component: DonatorQrcodeComponent,
      },
      {
        path: 'leaderboard',
        component: DonatorLeaderboardComponent,
      }
    ]
  },
  {
    path: 'collector',
    component: CollectorComponent,
    children: [

      {
        path: '',
        component: CollectorRequestComponent,
      },
      {
        path: 'verify',
        component: CollectorVerifyComponent,
      },
      {
        path: 'request',
        component: CollectorRequestComponent,
      },
      {
        path: 'wallet',
        component: CollectorWalletComponent,
      }
    ]
  },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
export const router: ModuleWithProviders = RouterModule.forRoot(routes);






