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


  postDonateData(): void {
    console.log('posted from data service');
    this.http.post('/api/setMood', {abc: 'abc' , abca: 'xyz'},
    this.options );

  }





}
