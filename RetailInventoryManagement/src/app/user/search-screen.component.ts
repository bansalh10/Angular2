import {Component,OnInit} from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router'
import{ProductService} from '../services/product.service'
import{IProduct} from '../models/IProduct'
@Component({
moduleId:module.id,
templateUrl:'search-screen.component.html'
})
export class SearchScreenComponent implements OnInit{
     private products:IProduct[];
      private cartItems:IProduct[];
      private prevSearchedItems:IProduct[];
 constructor(private _router:Router,private _activatedRoute:ActivatedRoute,private _productService:ProductService){

}
    ngOnInit():void{
       this._activatedRoute.params.subscribe( param => this.searchProducts() ); 
       var data=window.localStorage.getItem("cartItems");
      if(data){
        this.cartItems=JSON.parse(data);
      }
         else{
      this.cartItems=new Array<IProduct>();
         }
           var prevItems=window.localStorage.getItem("prevItems");
      if(prevItems){
        this.prevSearchedItems=JSON.parse(prevItems);
      }
         else{
      this.prevSearchedItems=new Array<IProduct>();
         }
    }
  
    
    
    searchProducts(){
      
        let name=this._activatedRoute.snapshot.params['search'];
    this._productService.searchProducts(name).subscribe(products=>{
        
        this.products=products;
        this.products=this.products.filter(product=>product.outofstock==false);
       this.prevSearchedItems= this.prevSearchedItems.concat(this.products);
        if(this.prevSearchedItems.length>3)
        {
            this.prevSearchedItems.splice(0,this.prevSearchedItems.length-3)
        };
        window.localStorage.setItem("prevItems",JSON.stringify(this.prevSearchedItems));
        this.checkCart(this.products);
    });
}
 addToCart(product:IProduct){
      console.log("hiiiiii");
      
       this.setCartValue(this.products,product.id,1);
        this.cartItems.push(product);
      
      window.localStorage.setItem("cartItems",JSON.stringify(this.cartItems));
      
      console.log(this.products);
     // this._router.navigate(['user/homepage']);
    
}
removeFromCart(product){
   this.setCartValue(this.products,product.id,0);
  this.cartItems.splice(this.cartItems.indexOf(product),1);
 window.localStorage.setItem("cartItems",JSON.stringify(this.cartItems));
 
     // this._router.navigate(['user/homepage']);
}
checkCart(products:IProduct[]){
  console.log("cartchecking");
  if(this.cartItems.length!=0){
    for(let i=0;i<this.cartItems.length;i++){
      this.setCartValue(products,this.cartItems[i].id,1);
    }
  }
}
setCartValue(products,id,value){
 let pd=products.find(p=>p.id==id);
       if(pd!=undefined){
    products[products.indexOf(pd)].cart=value;
      }
}
}
