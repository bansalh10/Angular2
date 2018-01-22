import{Injectable} from '@angular/core'
import{Http,Response,Headers,RequestOptions} from '@angular/http'
import{Router} from '@angular/router'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/Operator/map'
import 'rxjs/add/Operator/do'
import 'rxjs/add/Operator/catch'
import {IProduct} from '../models/IProduct';
@Injectable()
export class ProductService{
    private _baseUrl='http://localhost:8080/RetailManagement/webapi/products';
    private headers = new Headers({'Content-Type': 'application/json'});
        private options=new RequestOptions({headers:this.headers});
constructor(private _http:Http,private _router:Router){

}
 getProducts():Observable<IProduct[]>{
return this._http.get(this._baseUrl).map(response=><IProduct[]> response.json()).do(data=>console.log('All: '+JSON.stringify(data))).catch(this.handleError);
 }
  getOffers():Observable<IProduct[]>{
      let url=this._baseUrl+'/offers';
return this._http.get(url).map(response=><IProduct[]> response.json()).do(data=>console.log('All: '+JSON.stringify(data))).catch(this.handleError);
 }
 searchProducts(name){
     let url=this._baseUrl+`/search/${name}`;
     return this._http.get(url).map(response=><IProduct[]> response.json()).do(data=>console.log('All: '+JSON.stringify(data))).catch(this.handleError);
 }
 editProduct(id):Observable<IProduct>{
     let url=this._baseUrl+'/'+id;
      return this._http.get(url).map(response=><IProduct> response.json()).do(data=>console.log('All: '+JSON.stringify(data))).catch(this.handleError);  
    }
    addProduct(product){
        let url=this._baseUrl+'/product';
        let body=JSON.stringify(product);
        console.log(body);
        return this._http.post(url,body,this.options).catch(this.handleError);  
    }
    update(product){
        product=JSON.stringify(product);
        console.log('Helooooooooooooooooo::::'+product);
        let url=this._baseUrl+'/update';
      return this._http.post(url,product,this.options).catch(this.handleError);  
    }
    delete(id){
     let url=this._baseUrl+`/${id}`;
     return this._http.delete(url,this.options).catch(this.handleError);  
    }
  private handleError(error:Response){
        console.log("here in error");
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    };
    
}