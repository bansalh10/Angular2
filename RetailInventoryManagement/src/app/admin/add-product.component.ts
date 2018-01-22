import{Component} from '@angular/core';
import{Router,ActivatedRoute} from'@angular/router'
import{ProductService} from '../services/product.service'
import{IProduct} from '../models/IProduct'
@Component(
    {
        moduleId:module.id,
        templateUrl:'add-product.component.html'
    })
export class AddProductComponent {
private product:IProduct=new IProduct();
    constructor(private _router:Router,private _activatedRoute:ActivatedRoute,private productService:ProductService){

    }
    addProduct(){
        debugger;
        this.productService.addProduct(this.product).subscribe(success=>this._router.navigate(['admin/home']));
    }
  
}