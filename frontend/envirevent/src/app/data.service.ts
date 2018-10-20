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


  postDonateData(body):void{
    console.log('posted from data service');
    this.http.post('/api/api/dummy', body,this.options ).subscribe(
      dat => console.log(dat)
    );

  }
  getDonateData(): Observable<any> {
    return this.http.get('/api/transac/test');
  }
  postLoginData(body):void{
    console.log('posted from data service');
    this.http.post('/api/auth/login', body,this.options ).subscribe(
      dat => console.log(dat)
    );

  }
  postRegData(body):void{
    console.log('posted from data service');
    this.http.post('/api/auth/register', body,this.options ).subscribe(
      dat => console.log(dat)
    );

  }




}
