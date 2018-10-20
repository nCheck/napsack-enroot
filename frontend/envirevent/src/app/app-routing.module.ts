
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
    ]
  },

];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
export const router: ModuleWithProviders = RouterModule.forRoot(routes);






