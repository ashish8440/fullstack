import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './../utils/resource';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _url = "./../../assets/abc.json";

  private secondBaseURL = API_URL; 

  constructor(private http: HttpClient) { }

  simpleJSONServiceCall() {
    return this.http.get(this._url);
  }

  getSimpleAPICall() {
    // console.log(this.secondBaseURL);
    return this.http.get(this.secondBaseURL);
  }

  callWithParameter() {
    return this.http.post(this.secondBaseURL,{name:"ass"});
  }


  

}
