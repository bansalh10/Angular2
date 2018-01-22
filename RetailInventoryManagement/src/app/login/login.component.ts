import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'login',
    moduleId:module.id,
    templateUrl:'login.component.html',


})

export class LoginComponent{
    user:string="user";
    admin:string="admin";
    
    constructor(private _route:Router){

    }

    userClick():void{
        this._route.navigate(['user/homepage']);
    }

    adminClick():void{
        this._route.navigate(['admin/home']);
    }


}