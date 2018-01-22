import { Injectable } from '@angular/core';
@Injectable()
export class CustomerService {

 data:any[]=[];

  constructor() { }

  saveCustomer(obj:any)
  {
    //console.log(obj);
    if(obj.type==1)
    {
     if(obj.loyal)
     {
       obj.charges=obj.charges-(obj.charges*0.05);
     }
     else{obj.charges=obj.charges;} 
    }
    else
    {
      if(obj.numemp>10){
        obj.charges=obj.charges-(obj.charges*0.15);
      }
      else
      {
         obj.charges=obj.charges-(obj.charges*0.10);
      }
    }
    let data1=window.localStorage.getItem('my-data');
    if(data1){
       let temp=JSON.parse(window.localStorage.getItem('my-data'));
       temp.push(obj);
       window.localStorage.setItem('my-data',JSON.stringify(temp));
   }
    else
    {
      this.data.push(obj);
      window.localStorage.setItem('my-data',JSON.stringify(this.data));
    }


  }
  showCustomer()
  {
    let arrayOfCustomers:any[]=[];
    let data=window.localStorage.getItem('my-data');
    if(data)
    {
      arrayOfCustomers=JSON.parse(window.localStorage.getItem('my-data'));
      
    }
    return arrayOfCustomers;
    
  }


  deleteCustomer(id)
  {
     let data=JSON.parse(window.localStorage.getItem('my-data'));
    let k=-1;
    for(let i=0;i<data.length;i++)
    {
       if(data[i].id==id)
       {
           k=i;
           break;
       }
    }
    data.splice(k,1);
    window.localStorage.setItem('my-data',JSON.stringify(data));

  }
  updateCustomer(id)
  {
        let data=JSON.parse(window.localStorage.getItem('my-data'));
    let k=-1;
    for(let i=0;i<data.length;i++)
    {
       if(data[i].id==id)
       {
           k=i;
           break;
       }
    }
    let obj=data[k];
   
return obj;
  }



  updateCustomerAgain(id,obj)
  {
    let data=JSON.parse(window.localStorage.getItem('my-data'));
    let k=-1;
    for(let i=0;i<data.length;i++)
    {
       if(data[i].id==id)
       {
           k=i;
           break;
       }
    }
    data.splice(k,1);
 if(obj.type==1)
    {
     if(obj.loyal)
     {
       obj.charges=obj.charges-(obj.charges*0.05);
     }
     else{obj.charges=obj.charges;} 
    }
    else
    {
      if(obj.numemp>10){
        obj.charges=obj.charges-(obj.charges*0.15);
      }
      else
      {
         obj.charges=obj.charges-(obj.charges*0.10);
      }
    }


    data.push(obj);
    window.localStorage.setItem('my-data',JSON.stringify(data));
  }

}
