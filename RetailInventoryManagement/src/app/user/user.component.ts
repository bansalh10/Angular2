import {Component,OnInit,DoCheck} from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router'

@Component({
selector:'user-component',
moduleId:module.id,
templateUrl:'user.component.html'
})
export class UserComponent implements DoCheck{
    private title:string;
    private search:string;
     constructor(private _router:Router,private activatedRoute:ActivatedRoute){
    }
    ngDoCheck(){
        if(this._router.url=="/user/homepage")
           {
               this.title="Home Page";
        }
           else{
               this.title="Search Page";
           }
    }
   
    searchProducts(search:string){
        let seachedValue=search;
        this.search='';
        if(seachedValue!=undefined && seachedValue!=''){
    //        this.title="Search Page";
       this._router.navigate(['/user/search',seachedValue]);
    }
    
}

    
}

