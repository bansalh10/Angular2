import{Component,OnInit} from '@angular/core';
import{Router} from '@angular/router'
@Component(
    {
        moduleId:module.id,
        templateUrl:'product-management.component.html'
    }
)

export class ProductManagementComponent {
    constructor(private _router:Router){

    }
    
    searchProduct(search:string){
        console.log(search);
        if(search!=undefined && search!=''){
       this._router.navigate(['/admin/search',search]);
    }
    
    }
    addProduct(){
        
        this._router.navigate(['admin/addProduct']);
    }

}