import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {CustomerComponent} from './customer.component';
import {UpdateComponent} from './update/update.component';
import {DetailsComponent} from './details/details.component';
import {DummyComponent} from './dummy/dummy.component';

const routes: Routes = [
{
  path:'customer',
  component:CustomerComponent,
  children:[{
  path:'add-new-customer-form',
  component:AddCustomerComponent

},{
  path:'update/:id',
  component:UpdateComponent
},{
  path:'details/:id',
  component:DetailsComponent
},{
  path:'dummy',
  component:DummyComponent
}]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
