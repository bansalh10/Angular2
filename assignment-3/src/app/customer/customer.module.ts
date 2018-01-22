import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import {CustomerComponent} from './customer.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {ShowCustomerComponent} from './show-customer/show-customer.component';
import {CustomerService} from './customer.service';
import{CustomerRoutingModule} from './customer-routing.module';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { DummyComponent } from './dummy/dummy.component';
@NgModule({
  imports: [
    CommonModule,FormsModule,CustomerRoutingModule
  ],
  declarations: [CustomerComponent,AddCustomerComponent,ShowCustomerComponent, UpdateComponent, DetailsComponent, DummyComponent],
  providers:[CustomerService]
  
})
export class CustomerModule { }
