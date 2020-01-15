import { Directive ,Input,HostListener} from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController ,AlertController,NavController, NavParams ,LoadingController, Loading} from 'ionic-angular';
//import { FilePath } from '@ionic-native/file-path';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { File } from '@ionic-native/file';
import { Http, Headers, RequestOptions} from '@angular/http';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/catch';
  import { Base64 } from '@ionic-native/base64';
  import { Transfer, TransferObject } from '@ionic-native/transfer';
  import { Device } from '@ionic-native/device';
@Directive({
  selector: '[image-draw-text3]' // Attribute selector
})
export class ImageDrawText3Directive {
  username='';
  items = [];
  imgProcessing: boolean = false;
  loading: Loading;
  imagepath:any;
  timestamp:any;
  storeimage:any;
  dirname="msphc_images"
  folderpath = "file:///storage/emulated/0/MSPHC/msphc_images";
    constructor(private device: Device,private transfer: Transfer,public loadingController:LoadingController,private base64: Base64,public http:Http,public storage: Storage,public toastCtrl: ToastController,
      public alert: AlertController,private base64ToGallery: Base64ToGallery,private sqlite: SQLite,private file: File,public loadingCtrl: LoadingController) 
      { }
      loaded = false;
      @Input() text: any;
      @Input() texts: any;
       @HostListener('load', ['$event.target'])
     onLoad(img3) {
      if(this.loaded) {
      return ;
      //this.loaded = false
      }
      this.loaded = true;
      let canvas = document.createElement('canvas');
      let context = canvas.getContext('2d');
      var radius = canvas.height / 2;
      canvas.height = 600;
      canvas.width = 600;
      context.drawImage(img3, 0, 0);
      context.fillStyle = "#488AC7";
      context.fillRect(0, 0, canvas.width, 30);
      context.fillRect(0, canvas.height - 30, canvas.width, canvas.height);
      //context.font = "100px";
      context.font = radius*0.15 + "100px arial";
      context.textBaseline="middle";
      context.textAlign = 'center';
      context.fillStyle = 'white';
      context.fillText(this.text,300 , 10);
      context.fillText(this.texts,300 , 590);
      img3.src = canvas.toDataURL();
      context.fillStyle = "#488AC7";
      context.fillRect(0,0,30,0)
      var datass=canvas.toDataURL();
      this.storage.set('base64', datass);
      var splitdata =[];
      var solitdata1=[];
      splitdata = this.texts.split('SSS-MSPHC/MAHAPOLICE')
      var second=splitdata[0];
      var third=splitdata[1];
      solitdata1= second.split('.png')
      var fourth=solitdata1[0];
   
      var ditems=[{key:'uuid',value: this.device.uuid}];
      var d = new Date(),
      n = d.getTime(),
      newFileName =  n ;
      this.timestamp=newFileName;
      var  deviceid=this.device.uuid
      this.saveBase64(datass,fourth+".png");
    
}

  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
     for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
         var byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

public saveBase64(base64:string, name:string):Promise<string>{
return new Promise((resolve, reject)=>{
  var realData = base64.split(",")[1]
  let blob=this.b64toBlob(realData, 'image/png')
  let result= this.file.createDir(this.file.externalRootDirectory+"/MSPHC/",this.dirname,true);
  result.then(data=>{
    this.file.writeFile(this.file.externalRootDirectory+"/MSPHC/msphc_images", name, blob)
  .then(()=>{
    resolve(this.folderpath+name);
   // alert(this.folderpath+name)
   this.saveimgfile(this.folderpath+name)
  })
  .catch((err)=>{
    alert('error writing blob')
    reject(err)
  })
 
  }).catch(error=>{
   alert("error  " +error );
  });
 
})
}


  ditems;
  public getuid(){
    var ditems=[{key:'uuid',value: this.device.uuid}];
    this.ditems=ditems;
    }
 storeimg=[];
public saveimgfile(path){
  
  this.storage.set('path2', path);
   this.sqlite.create({
   name: 'data.db',
   location: 'default'
   })
   .then((db: SQLiteObject) => {
   db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
   .then(() => console.log("img  Executed"))
   .catch(e => console.log(e));
   db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
   .then(() => console.log(" img INDERTed"))
   .catch(e => console.log(e));
   db.executeSql('select * from tbl_image', []).then((data) => {
   this.storeimg = [];
   if(data.rows.length > 0) {
   for(var i = 0; i < data.rows.length; i++) {
   this.storeimg.push({name: data.rows.item(i).name});}
  // alert(this.storeimg);
  this.storage.set('image', path);

   }
   }, (err) => {
   alert('Unable to execute sql: '+JSON.stringify(err));
   });
   })
   .catch(e => alert(JSON.stringify(e)));
   
   }
 public presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
