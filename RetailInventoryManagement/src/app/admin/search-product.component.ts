import{Component,OnInit} from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router'
import{ProductService} from '../services/product.service'
import{IProduct} from '../models/IProduct'
@Component(
    {
        moduleId:module.id,
        templateUrl:'search-product.component.html'
    }
    )

export class SearchProductComponent implements OnInit{
   private products:IProduct[];
 constructor(private _router:Router,private _activatedRoute:ActivatedRoute,private _productService:ProductService){

}
ngOnInit():void{
    console.log(this._router.url);
    if(this._router.url=='/admin/home'){
     this._productService.getProducts().subscribe(products=>this.products=products);
    }else{
 this._activatedRoute.params.subscribe( param => this.searchProducts() );
    }

}
searchProducts(){
    console.log("searching..");
    let name=this._activatedRoute.snapshot.params['search'];
    this._productService.searchProducts(name).subscribe(products=>this.products=products);
}
edit(id){
    this._router.navigate(['admin/edit',id]);
}
}