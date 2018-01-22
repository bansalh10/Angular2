import{Component} from '@angular/core'
import{Http,Response,Headers,RequestOptions} from '@angular/http'
import{Router} from '@angular/router'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/Operator/map'
import 'rxjs/add/Operator/do'
import 'rxjs/add/Operator/catch'
import{Image} from '../models/image'
@Component({
    moduleId:module.id,
    templateUrl:'photo.component.html'
})
export class PhotoComponent{
     private _baseUrl='http://localhost:8080/RetailManagement/webapi/products/image';
     private headers = new Headers();
   private blob:Blob;
         private base64;
    constructor(private _http:Http,private _router:Router){

}
imageUploaded(event){
console.log("uploaded");
this. headers.append('Accept', 'application/json');
let options=new RequestOptions({headers:this.headers});
let body=new FormData;
body.append('images',event.file,"hellooooooooooo");
 this._http.post(this._baseUrl,body,options).catch(this.handleError).subscribe(success=>{console.log('success');this.showImg();});  
}
imageRemoved(event){
    console.log("removed");
}
 private handleError(error:Response){
        console.log("here in error");
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    };
  /* showImg(){ 
        let url=this._baseUrl+'/1';
        this._http.get(url).map(response=><Image>response.json()).catch(this.handleError).subscribe((image)=>{this.blob=<Blob>image.img;console.log(this.blob);var dataURI;

var reader = new FileReader();

reader.onloadend = function(){
  // here you'll call what to do with the base64 string result
  dataURI = this.result;
  console.log(dataURI);
  };
reader.readAsDataURL(this.blob);
this.base64=dataURI;});    
}*/
showImg(){
    let url=this._baseUrl+'/1';
    this._http.get(url).map(response=><Image>response.json()).catch(this.handleError).subscribe(image=>{this.base64=image.img;});
}
}