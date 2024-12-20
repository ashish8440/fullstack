import { Component } from '@angular/core';
import { CommonService } from "./../../services/common.service";
@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent {

  base64Image: string = '';
  ashish: string = ''

  constructor(private _service: CommonService) {}

  triggerClickEvent() {
    console.log("Trigger Click Event");
  }

  SimpleJSONServiceCall() {
    this._service.simpleJSONServiceCall().subscribe((d: any) =>{
      console.log(d);
    });
  }

  getSimpleAPICall() {
    this._service.getSimpleAPICall().subscribe((d: any) => {
      console.log(d);
    });
  }

  getDataWithParameterAPICall() {
    return this._service.callWithParameter().subscribe((d: any) => {
      console.log(d);
    });
  }

 

 
  




}
