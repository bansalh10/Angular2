import { Component,OnInit } from '@angular/core';
import {FNOL } from '../models/FNOL'
import{FnolService} from '../services/fnol.service'
// const URL = '/api/';
const URL = 'http://localhost:8080/FNOLProcessing/webapi/FNOL/fileupload';
 
@Component({
  selector: 'dashboard',
  moduleId:module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls:['dashboard.component.css']
})
export class DashboardComponent{
  public fnols:FNOL[];
  public targetFnol;
  public suspiciousFnol;
  public fraudFnol;
  public validFnol;
  public date;
  public saveDate;
 constructor (private FnolService:FnolService ){

  }
  search(date){
    this.saveDate=this.date;
      this.FnolService.getFnols(date).subscribe(result=>{this.fnols=result;this.suspiciousFnol=this.fnols.filter(item=>{return  item.isFraud==3});this.fraudFnol=this.fnols.filter(item=>{return  item.isFraud>3});this.validFnol=this.fnols.filter(item=>{return  item.isFraud<3})});
  }
  update(fnol,value){
    this.targetFnol=null;
    fnol.isFraud=value;
     this.FnolService.update(fnol).subscribe(success=>{ 
     this.search(this.saveDate);
    });
    
  }
  setFnol(fnol){
      this.targetFnol=fnol;
      
  }
}