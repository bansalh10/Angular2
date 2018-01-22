import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';

import{FnolService} from './services/fnol.service'
import{ImageUploadModule} from 'angular2-image-upload'
import{FNOLDislayComponent} from './fnol/fnol-dispaly.component'
import { FileUploadModule  } from 'ng2-file-upload';
import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io'; 
import{DashboardComponent} from './dashboard/dashboard.component'
@NgModule({
  declarations: [
    AppComponent,
    FNOLDislayComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ImageUploadModule.forRoot(),
    HttpModule,
    FileUploadModule ,
    RouterModule.forRoot([ 
    {path:'file',component:FNOLDislayComponent},
    {path:'dashboard',component:DashboardComponent}
    ])
  ],
  providers: [FnolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
