import { Component,OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import{FnolService} from '../services/fnol.service'
// const URL = '/api/';
const URL = 'http://localhost:8080/FNOLProcessing/webapi/FNOL/fileupload';
 
@Component({
  selector: 'file-upload',
  moduleId:module.id,
  templateUrl: 'fnol-display.component.html'
})
export class FNOLDislayComponent implements OnInit {
  public email:string;
  public message1;
  public message2;
  public message3;
  public message4;
  public message5;
  public message6;
  public message7;
  public message8;
  public message9;
  public isFraud;
  public validEmail:boolean;
  public socialMediaStatus:string;
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
   ngOnInit(){
this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
 var that=this;
 // WebSocket Initialization
    var taskSocket = new WebSocket("ws://localhost:8080/FNOLProcessing/message");
  var msg:String;
    taskSocket.onmessage = function(message) {
        msg = message.data;
        if(msg=="File Received"){
             that.message1="true";
        }
        if(msg=="Information Parsed"){
             that.message2="true";
        }
        if(msg.includes("Happiness Index")){
             that.message3=msg.substr(msg.indexOf("is")+3);
        }
        if(msg.includes("Credit Score Variation")){
             that.message4=msg.substr(msg.indexOf("is")+3);
        }
        if(msg.includes("Name is")){
             that.message5=msg.substr(msg.indexOf("is")+3);
        }
        if(msg.includes("Email is")){
             that.message6=msg.substr(msg.indexOf("is")+3);
        }
         if(msg.includes("Date is")){
             that.message7=msg.substr(msg.indexOf("is")+3);
        }
        if(msg.includes("Time is")){
             that.message8=msg.substr(msg.indexOf("is")+3);
        }
        if(msg.includes("SSN is")){
             that.message9=msg.substr(msg.indexOf("is")+3);
        }
        if(msg.includes("FraudScore is")){
             that.isFraud=msg.substr(msg.indexOf("is")+3);
        }


       console.log(msg);
                
    };
    
    taskSocket.onclose = function() {
       
    } 
 

  }
 constructor (private FnolService:FnolService ){

  }
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  addEmail(){
   this.validEmail=true;
   this.FnolService.getMessages().subscribe(data=>{console.log(data)});
  }
  addSms(){
      this.FnolService.addSocialMediaStatus(this.email,this.socialMediaStatus).subscribe(result=>{console.log("File appended")});
  }
  upload(item){
      this.message1="";
      this.message2="";
      this.message3="";
      this.message4="";
       item.upload();
  }
  uploadAll(){
   this.uploader.getNotUploadedItems().forEach(item => {
      item.upload();
    });
  }
}