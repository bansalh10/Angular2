import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Params} from '@angular/router'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
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

userId;
  constructor(private _customerservice:CustomerService,private _activatedroute:ActivatedRoute) { 
      this._activatedroute.params.subscribe(param=>this.ngOnInit());
  }
  

 ngOnInit() {
  //  this.id=
  //  this._customerservice.updateCustomer(id);

/* this._activatedroute.params.subscribe((params: Params) => {
        this. userId = params['id'];
       // console.log(userId);
      });*/
      this.userId=this._activatedroute.snapshot.params['id'];
      console.log(this.userId);
let data:any;
data=this._customerservice.updateCustomer(this.userId);
this.name=data.name;
this.age=data.age;
this.mobnum=data.mobnum;
this.desc=data.desc;
this.radio=data.radio;
this.LoyalC=data.loyal;
this.Date=data.date;
this.Charges=data.charges;
this.NumEmp=data.numemp;
this.Dist=data.dist;

//console.log(data);


  }
  close()
  {
    window.location.pathname="/";
  }

}
