import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LoginComponent} from './login/login.component';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import{ProductManagementComponent} from './admin/product-management.component'
import{AddProductComponent} from './admin/add-product.component'
import{EditProductComponent} from './admin/edit-product.component'
import{SearchProductComponent} from './admin/search-product.component'
import{UserComponent} from './user/user.component'
import{HomeComponent} from './user/home.component'
import{SearchScreenComponent} from './user/search-screen.component'
import{ProductService} from './services/product.service'
import{ImageUploadModule} from 'angular2-image-upload'
import{PhotoComponent} from './admin/photo.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductManagementComponent,
    AddProductComponent,
    EditProductComponent,
    SearchProductComponent,
    UserComponent,
    HomeComponent,
    SearchScreenComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ImageUploadModule.forRoot(),
    HttpModule,
    RouterModule.forRoot([ {path:'login',component:LoginComponent},
    {path:'photo',component:PhotoComponent},
     {path:'admin',component:ProductManagementComponent,
      children:[
          {
      path:'home', component:SearchProductComponent 
            },{
      path:'search/:search', component:SearchProductComponent 
            }
             ] },
     {path:'admin/addProduct',component:AddProductComponent},
     {path:'admin/edit/:id',component:EditProductComponent},
     {path:'user',component:UserComponent,
    children:[
          {
      path:'homepage', component:HomeComponent 
            },{
      path:'search/:search', component:SearchScreenComponent 
            }
             ] 
    },
      {path:'**',pathMatch:'full',component:LoginComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
