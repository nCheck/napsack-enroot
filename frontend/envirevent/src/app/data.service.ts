import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RequestOptions, Request, RequestMethod , Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = { headers: this.headers };
  constructor(public http: HttpClient) { }
  uniqueValue:String;

  postDonateData(body):Observable<any>{
    console.log('posted from data service');
   return this.http.post('/api/transac/generate', body,this.options );
  }
  getDonateData(): Observable<any> {
    return this.http.get('/api/transac/test');
  }
  getLeaderboardData(): Observable<any> {
    console.log(this.http.get('/api/quest/leaderboard'));
    return this.http.get('/api/quest/leaderboard');
  }
  postLoginData(body):Observable<any>{
    console.log('posted from data service');
    return this.http.post('/api/auth/login', body,this.options );

  }

  postRegData(body):Observable<any>{
    console.log('posted from data service');
    return this.http.post('/api/auth/register', body,this.options );


  }
  getWalletData(): Observable<any> {
    console.log(this.http.get('/api/transac/wallet'));
    return this.http.get('/api/transac/wallet');
  }
  getEventsData(): Observable<any> {
    console.log(this.http.get('/api/quest'));
    return this.http.get('/api/quest');
  }

}
