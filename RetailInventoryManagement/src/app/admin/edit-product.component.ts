import{Component,OnInit} from '@angular/core';
import{Router,ActivatedRoute} from'@angular/router'
import{ProductService} from '../services/product.service'
import{IProduct} from '../models/IProduct'
@Component(
    {
        moduleId:module.id,
        templateUrl:'edit-product.component.html'
    })
export class EditProductComponent implements OnInit{
   private product:IProduct;
    constructor(private _router:Router,private _activatedRoute:ActivatedRoute,private productService:ProductService){

    }
ngOnInit():void{
     let id= this._activatedRoute.snapshot.params['id'];
     this.productService.editProduct(id).subscribe(product=>{this.product=product;console.log(this.product.cart)});
}
update(){
this.productService.update(this.product).subscribe(success=>this._router.navigate(['admin/home']));
}
delete(id){
this.productService.delete(id).subscribe(success=>this._router.navigate(['admin/home']));
}
}