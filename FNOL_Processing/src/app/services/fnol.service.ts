import{Injectable} from '@angular/core'
import{Http,Response,Headers,RequestOptions} from '@angular/http'
import{Router} from '@angular/router'
import 'rxjs/add/Operator/map'
import 'rxjs/add/Operator/do'
import 'rxjs/add/Operator/catch'
import {FNOL} from '../models/FNOL';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import {data} from '../models/data'
import{Date} from'../models/date'
@Injectable()
export class FnolService{
    private _baseUrl='http://localhost:8080/FNOLProcessing/webapi/FNOL/addSocialMediaData';
    private headers = new Headers({'Content-Type': 'application/json'});
    private url = 'http://localhost:9000';  
    public Date=new Date();
  private socket;
     data=new data();
        private options=new RequestOptions({headers:this.headers});
constructor(private _http:Http,private _router:Router){

}
 getFnols(date):Observable<FNOL[]>{
   var url='http://localhost:8080/FNOLProcessing/webapi/FNOL/fnols';
   this.Date.date=date;
   var body=date;
return this._http.post(url,body,this.options).map(response=><FNOL[]> response.json()).do(data=>console.log('All: '+JSON.stringify(data))).catch(this.handleError);
 }
  
 
    addSocialMediaStatus(email,text){
       
        let body=JSON.stringify({email,text});
        console.log(body);
        return this._http.post(this._baseUrl,body,this.options).catch(this.handleError);  
    }
    getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
  update(fnol){
        var body=JSON.stringify(fnol);
         var url='http://localhost:8080/FNOLProcessing/webapi/FNOL/update';
        console.log('Helooooooooooooooooo::::'+fnol);
      return this._http.post(url,body,this.options).catch(this.handleError);  
    }
  
  private handleError(error:Response){
        console.log("here in error");
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    };
    
}