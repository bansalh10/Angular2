import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {
ctype:string;
  data: any[];
  flag = false;
  constructor(private _customerservice: CustomerService) { }

  ngOnInit() {

    let temp = this._customerservice.showCustomer();
   
    if (temp.length > 0) {
      this.flag = true;
      this.data = temp;
    }


  }

  delete(value) {
    //console.log(value);
    this._customerservice.deleteCustomer(value);
    window.location.pathname="/customer";
  }

}
