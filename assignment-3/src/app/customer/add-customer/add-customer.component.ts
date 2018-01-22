import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

name:string;
age:number;
desc:string;
mobnum:number;
radio:number;
LoyalC:boolean;
Date:Date;
Charges:string;
NumEmp:number;
Dist:number;
flag=true;
//obj:object;

  constructor(private _customerservice:CustomerService) { }

  ngOnInit() {
  
}
hideemployee(value)
{
 // console.log(value);
  if(value=="Regular")
  {
     this.flag=false;
  }
  else
  {
    this.flag=true;
  }
}
SaveCustomer()

{
  let obj={
        id:Date.now(),
       name:this.name,
       age:this.age,
       desc:this.desc,
       mobnum:this.mobnum,
       radio:this.radio,
       loyal:this.LoyalC,
       date:this.Date,
       charges:this.Charges,
       numemp:this.NumEmp,
       dist:this.Dist



   };
  this._customerservice.saveCustomer(obj);
  window.location.pathname="/";
}
}
