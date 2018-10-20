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
  constructor(private http: HttpClient) { }

  postDonateData(body:Number[]):void{
    this.http.post('/api/setMood', body,
    this.options
  ).subscribe(
    dat => console.log(dat)
  );
  console.log('posted from data service');
  }
}
