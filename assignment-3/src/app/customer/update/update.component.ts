import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private _customerservice: CustomerService, private _activatedroute: ActivatedRoute) {
    this._activatedroute.params.subscribe(param=>this.ngOnInit());
  }
  name: string;
  age: number;
  desc: string;
  mobnum: number;
  radio: number;
  LoyalC: boolean;
  Date: Date;
  Charges: string;
  NumEmp: number;
  Dist: number;
  flag = true;
  userId;
  ngOnInit() {
    //  this.id=
    //  this._customerservice.updateCustomer(id);

  /*  this._activatedroute.params.subscribe((params: Params) => {
      this.userId = params['id'];
      // console.log(userId);
    });*/
    this.userId=this._activatedroute.snapshot.params['id'];
    //console.log("hiiiiiiii");
    let data: any;
    data = this._customerservice.updateCustomer(this.userId);
    this.name = data.name;
    this.age = data.age;
    this.mobnum = data.mobnum;
    this.desc = data.desc;
    this.radio = data.radio;
    this.LoyalC = data.loyal;
    this.Date = data.date;
    this.Charges = data.charges;
    this.NumEmp = data.numemp;
    this.Dist = data.dist;

    //console.log(data);


  }

  
  hideemployee(value) {
    // console.log(value);
    if (value == "Regular") {
      this.flag = false;
    }
    else {
      this.flag = true;
    }
  }

  SaveCustomer() {
    let obj = {
      id: Date.now(),
      name: this.name,
      age: this.age,
      desc: this.desc,
      mobnum: this.mobnum,
      radio: this.radio,
      loyal: this.LoyalC,
      date: this.Date,
      charges: this.Charges,
      numemp: this.NumEmp,
      dist: this.Dist



    };
    this._customerservice.updateCustomerAgain(this.userId, obj);
//    window.location.pathname = "/"
   // 
    
  }


}
