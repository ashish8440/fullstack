import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _url = "./../../assets/abc.json";

  private secondBaseURL = 'http://localhost:4003'; 

  constructor(private http: HttpClient) { }

  simpleJSONServiceCall() {
    return this.http.get(this._url);
  }

  getSimpleAPICall() {
    return this.http.get(this.secondBaseURL);
  }

  callWithParameter() {
    return this.http.get(this.secondBaseURL+'/api/users');
  }

}
