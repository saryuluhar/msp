import { Component ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams ,App} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {  Platform, AlertController} from 'ionic-angular';
import {  ActionSheetController, ToastController, LoadingController, Loading } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { ImagedetailsPage } from '../imagedetails/imagedetails';
import { Device } from '@ionic-native/device';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Base64 } from '@ionic-native/base64';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

 
import { Observable } from 'rxjs/Observable';
import { ForkJoinObservable } from "rxjs/observable/ForkJoinObservable";
import {  Entry, FileEntry } from '@ionic-native/file';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-unsend',
  templateUrl: 'unsend.html',
})
export class UnsendPage {
  items: any;
  loading: Loading;
  mapping:any;
  imagepathtext:any;
  username='';
  imagefile='';
  itemss = [];
  textfile=[];
  mapping_data_new=[];
  ArrayFiledata: any = [];
  storebase64:any
  textmapping:any;
  mappingtextdata:'';
  base64Files:any;
  //arrayindex=[];
  arrayindex: any = [];
  id:any
  txtfile:any;
  mappingdata:any;
  mappingdata1:any;
  mappingdata2:any;
  showtextfile:any;
  path:string;
  imagebycomma: any = [];
  maxarraycount:any;
  
  imagebycomma_1: any = [];
  textfilepath:any;
  realpathimagearray:any=[];
  showThiss:boolean;
   bodyf = new FormData();
   fileUpload:any;
   public isUploading = false;
  public uploadingProgress = {};
  public uploadingHandler = {};
  showThis3:boolean;
  showThis2:boolean
  showThis1:boolean
  immgpath:any;
  pid:any;
  
  //Server_url="http://m2.mrsac.org.in:8080/MSPHC-API/noauth"
    Server_url="http://43.241.63.17:8080/MSPHC-API/noauth"
  
  
  
  constructor( public file:File, private transfer: Transfer,private base64: Base64,public app: App,private device: Device, public http:Http,
    public navCtrl: NavController, public navParams: NavParams,public storage: Storage,public toastCtrl: ToastController,
    public alert: AlertController,public platform: Platform, public loadingCtrl: LoadingController,public loadingController:LoadingController,private sqlite: SQLite) {
      this.storage.get('pid').then((data) =>{
      this.pid = data;
        });
      
     
    this.storage.get('myStore').then((data) => {
      this.storebase64 = data;
      console.log(data);
     });

      this.savenew();
     
    }
    ngOnInit() {
      this.savenew();
      this.getuid();
      this.GETFiles();
      //alert(this.pid);
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad UnsentPage');
      this.savenew();
   // this.gettextfiles();
    }
    device_id;
    public getuid(){
      var device_id=this.device.uuid;
     
      }

      public savenew(){
        this.sqlite.create({
        name: 'msphc.db',
        location: 'default'
        })
        .then((db: SQLiteObject) => {
       db.executeSql('select * from tblnew_image', []).then((data) => {
        this.itemss = [];
        if(data.rows.length > 0) {
        for(var i = 0; i < data.rows.length; i++) {
        this.itemss.push({
          name: data.rows.item(i).name,
          pid:data.rows.item(i).pid
        });}
        }
        }, (err) => {
        console.log('Unable to execute sql: '+JSON.stringify(err));
        });
        })
        .catch(e => alert(JSON.stringify(e)));  
        }

      gettestFlie=[];

      public GETFiles(){
        this.sqlite.create({
        name: 'msphc.db',
        location: 'default'
        })
        .then((db: SQLiteObject) => {
       db.executeSql('select * from textfile', []).then((data) => {
        this.gettestFlie = [];
        if(data.rows.length > 0) {
        for(var i = 0; i < data.rows.length; i++) {
        this.gettestFlie.push({name: data.rows.item(i).name});}
        }
        }, (err) => {
          console.log('Unable to execute sql: '+JSON.stringify(err));
        });
        })
        .catch(e => console.log(JSON.stringify(e)));  
        }

        public optionsFn(){
          //alert(" 0"+ this.arrayindex);
         this.arrayindex=this.mapping;
          this.id=this.arrayindex.id;
          this.pid=this.arrayindex.pid;
         // alert(this.pid)
        this.imagebycomma=this.arrayindex.name.split(',');
           
            // alert(" 0"+ this.imagebycomma[0]);
            //alert(" 1"+this.imagebycomma[1]);
            // alert(" 2"+this.imagebycomma[2]);

            if(this.arrayindex.name.split(',')!=undefined){

              this.imagebycomma_1=this.arrayindex.name.split(',');
            

              this.realpathimagearray=this.file.externalRootDirectory+"MSPHC/msphc_images/"+this.imagebycomma_1[0]+".png" +","+ this.file.externalRootDirectory+"MSPHC/msphc_images/"+this.imagebycomma_1[1]+".png";
            
             // alert("array1"+this.realpathimagearray);
            
            }

            
 

           //this.mappingdata=this.file.dataDirectory+"MSPHC/msphc_images/"+this.imagebycomma_1[0]+".png";

           this.file.readAsDataURL(this.file.externalRootDirectory+"MSPHC/msphc_images/", this.imagebycomma_1[0]+".png").then(res=> this.mappingdata = res  );
         //  var ImageData = this.file.externalRootDirectory.replace(/^file:\/\//, '');
          // alert("00  "+ this.mappingdata)
         //  alert("00  "+ ImageData+"MSPHC/msphc_images/"+this.imagebycomma_1[0]+".png")

           // this.immgpath=ImageData+"MSPHC/msphc_images/"+this.imagebycomma_1[0]+".png";

           //alert(this.immgpath);

           this.file.readAsDataURL(this.file.externalRootDirectory+"MSPHC/msphc_images/",this.imagebycomma_1[2]+".png").then(res=> this.mappingdata2 = res  );

           this.file.readAsDataURL(this.file.externalRootDirectory+"MSPHC/msphc_images/",this.imagebycomma_1[1]+".png").then(res=> this.mappingdata1 = res  );
           //this.mappingdata2=this.file.dataDirectory+"MSPHC/msphc_images/"+this.imagebycomma_1[2]+".png";
           //alert("01  "+ this.mappingdata2)
          // this.mappingdata1=this.file.dataDirectory+"MSPHC/msphc_images/"+this.imagebycomma_1[1]+".png";
           //alert("02  "+ this.mappingdata1)

          
          }

          

          public SendImage(){
            if( this.mappingdata==undefined){
              alert("Please Select image")
            }else{
              //alert(this.mappingdata)

              if(this.imagebycomma_1[0]!=undefined){
                this.uploadImage(this.imagebycomma_1[0]);
              }else{
                let alert = this.alert.create({
                  title: 'Message',
                  message: 'Your device not saved first image.Please do mapping again.',
                  buttons: [
                     {
                    text: "Ok",
                    role: 'cancel'
                  }]
                })
                alert.present();
              
               
              }
             
            }
              
          }
          public uploadImage(path) {

            var url = this.Server_url+"/fileupload/"+this.pid;
           //alert(" 0   --- >"+url)
            var targetPath = this.file.externalRootDirectory + "MSPHC/msphc_images/" + path + ".png";
            var filename = path + ".png";
            var options = {
              fileKey: "file",
              fileName: filename,
              chunkedMode: false,
              mimeType: "multipart/form-data",
              params: { 'fileName': filename }
            };
            const fileTransfer: TransferObject = this.transfer.create();
            this.loading = this.loadingCtrl.create({
              content: 'Uploading...',
            });
        
            this.loading.present();
            fileTransfer.upload(targetPath, url, options).then(data => {
              this.loading.dismissAll();

              //alert("Response ----  ?  "+data.response )

              var respo='"{"response":"Image saved successfully"}"';

              //alert("Response  String ----  ?  "+respo )

              
        
              if (data.response == "Image saved successfully" && this.imagebycomma_1[1] != undefined) {
                this.uploadImage1(this.imagebycomma_1[1])
              } else {
                this.uploadtxtfile(this.file.externalRootDirectory + "MSPHC/" + this.imagebycomma[0] + ".txt", this.imagebycomma[0] + ".txt");
              }
        
            }, err => {
              this.loading.dismissAll()
              this.presentToast(err + 'Error while uploading file.');
            });
          }
        
        
        
          public uploadImage1(path1) {
        
            var url = this.Server_url+"/fileupload/"+this.pid;
           //alert(" 1   --- >"+url)
        
            var targetPath = this.file.externalRootDirectory + "MSPHC/msphc_images/" + path1 + ".png";
            var filename = path1 + ".png";
           
            var options = {
              fileKey: "file",
              fileName: filename,
              chunkedMode: false,
              mimeType: "multipart/form-data",
              params: { 'fileName': filename }
            };
        
            const fileTransfer: TransferObject = this.transfer.create();
            this.loading = this.loadingCtrl.create({
              content: 'Uploading...',
            });
        
            this.loading.present();
            fileTransfer.upload(targetPath, url, options).then(data => {
        
              this.loading.dismissAll();
        
              if (data.response == "Image saved successfully" && this.imagebycomma_1[2] != undefined) {
                this.uploadImage2(this.imagebycomma_1[2])
              } else {
                this.uploadtxtfile(this.file.externalRootDirectory + "MSPHC/" + this.imagebycomma[0] + "_" + this.imagebycomma[1] + ".txt", this.imagebycomma[0] + "_" + this.imagebycomma[1] + ".txt");
                
              }
        
            }, err => {
              this.loading.dismissAll()
              this.presentToast(err + 'Error while uploading file.');
            });
          }
        
        
        
          public uploadImage2(path2) {
        
            var url = this.Server_url+"/fileupload/"+this.pid;
            //alert(" 2   --- >"+ url)
        
            var targetPath = this.file.externalRootDirectory + "MSPHC/msphc_images/" + path2 + ".png";
            var filename = path2 + ".png";
        
            var options = {
              fileKey: "file",
              fileName: filename,
              chunkedMode: false,
              mimeType: "multipart/form-data",
              params: { 'fileName': filename }
            };
        
            const fileTransfer: TransferObject = this.transfer.create();
            this.loading = this.loadingCtrl.create({
              content: 'Uploading...',
            });
        
            this.loading.present();
            fileTransfer.upload(targetPath, url, options).then(data => {
        
              this.loading.dismissAll();
              this.loading.dismissAll();
              if (data.response == "Image saved successfully") {
                this.uploadtxtfile(this.file.externalRootDirectory + "MSPHC/" + this.imagebycomma[0] + "_" + this.imagebycomma[1] + "_" + this.imagebycomma[2] + ".txt", this.imagebycomma[0] + "_" + this.imagebycomma[1] + "_" + this.imagebycomma[2] + ".txt");
              }
        
            }, err => {
              this.loading.dismissAll()
              this.presentToast(err + 'Error while uploading file.');
            });
          }
  


        public presentToast(text) {
          let toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        }

       


     public  optionsFntxt(){
       this.mappingtextdata = this.textmapping;
      this.getdata( this.mappingtextdata);
      }


       public getdata(txtpath){

        this.sqlite.create({
        name: 'msphc.db',
        location: 'default'
        })
        .then((db: SQLiteObject) => {
       
        db.executeSql("select * from textfile where  name"  + "='" + txtpath   + "'", []).then((data) => {
        this.mapping_data_new = [];
        if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
          
          }
            }
        }, (err) => {
          console.log('Unable to execute sql: '+JSON.stringify(err));
        });
        })
        .catch(e => alert(JSON.stringify(e))); }

//  gotoDetails(){
//        if( this.mappingdata==undefined){
//         alert("Please Select image")
//       }else{
//         var imagepath= this.arrayindex.name;
//       let nav = this.app.getRootNav();
//          nav.push(ImagedetailsPage,{
//            param1: imagepath
//          });
//       }
     
//     }

 public GetSvaedDetails(id){
     // alert("code"+ id)
      this.sqlite.create({
      name: 'msphc.db',
      location: 'default'
      })
      .then((db: SQLiteObject) => {
       
      db.executeSql("select * from mapping_data ", []).then((data) => {
        this.mapping_data_new = [];
        this.mapping_data_new.push({name: data.rows.item(id).name,lat:data.rows.item(id).lat,
          lang:data.rows.item(id).lang,accuracy:data.rows.item(id).accuracy,date:data.rows.item(id).date,branch:data.rows.item(id).branch,office:data.rows.item(id).office,
          district:data.rows.item(id).district,
          unit:data.rows.item(id).unit,wl_type:data.rows.item(id).wl_type,wl_scheme:data.rows.item(id).wl_scheme,w_status:data.rows.item(id).w_status,doA:data.rows.item(id).doA,
          doI:data.rows.item(id).doI,doC:data.rows.item(id).doC,per:data.rows.item(id).per,remark:data.rows.item(id).remark});
       
      }, (err) => {
        console.log('Unable to execute sql: '+JSON.stringify(err));
      });
      })
      .catch(e => console.log(JSON.stringify(e)));
    }

    public uploadtxtfile(textfileuploadpath, filepath) {
    
      var url = this.Server_url+"/textfileupload";
      var targetPath = textfileuploadpath;
      var filename = filepath;
      var options = {
        fileKey: "file",
        fileName: filename,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { 'fileName': filename }
      };
  
      const fileTransfer: TransferObject = this.transfer.create();
  
      this.loading = this.loadingCtrl.create({
        content: 'Uploading...',
      });
      this.loading.present();
  
  
      fileTransfer.upload(targetPath, url, options).then(data => {
  
        this.loading.dismissAll()
  
        let alert = this.alert.create({
          title: 'Message',
          message: data.response + '  Data Uploaded Successfully',
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }]
        })
        alert.present();
        this.mappingdata = undefined;
        this.mappingdata1 = undefined;
        this.mappingdata2 = undefined;
  
  
        this.sucessfullysendimages(this.imagebycomma_1);
        this.removeSuccessfulsendimages(this.imagebycomma_1)
        this.savenew();
  
  
  
  
      }, err => {
        this.loading.dismissAll()
        this.presentToast('Error while uploading file.');
      });
    }
     
        sendimages=[];
        public sucessfullysendimages(path){
        
        this.sqlite.create({
          name: 'msphc.db',
          location: 'default'
          })
          .then((db: SQLiteObject) => {
          db.executeSql('CREATE TABLE IF NOT EXISTS sendimages(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
          .then(() => console.log("sendimg  Executed"))
          .catch(e => console.log(e));
          db.executeSql('INSERT INTO sendimages(name) VALUES(?)', [path])
          .then(() => console.log(" sendimg INDERTed"))
          .catch(e => console.log(e));
          db.executeSql('select * from sendimages', []).then((data) => {
          this.sendimages = [];
          if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
          this.sendimages.push({name: data.rows.item(i).name});}
        
          }
          }, (err) => {
            console.log('Unable to execute sql: '+JSON.stringify(err));
          });
          })
          .catch(e => console.log(JSON.stringify(e)));
        
          }

          removeSuccessfulsendimages(path){
        
            this.sqlite.create({
              name: 'msphc.db',
              location: 'default'
              })
              .then((db: SQLiteObject) => {
             
              db.executeSql("delete from tblnew_image where  name"  + "='" + path   + "'", []).then((data) => {
              
              }, (err) => {
              console.log('Unable to execute sql: '+JSON.stringify(err));
              });
              })
              .catch(e => alert(JSON.stringify(e)));
              }
    

          remove(no){
            (this.arrayindex).splice(no, 1);
          };

    public gettxt(imagpath){
      this.sqlite.create({
      name: 'msphc.db',
      location: 'default'
      })
      .then((db: SQLiteObject) => {
     db.executeSql("select * from textfile where  name"  + "='" + imagpath   + "'", []).then((data) => {
      this.mapping_data_new = [];
      if(data.rows.length > 0) {
      for(var i = 0; i < data.rows.length; i++) {
      this.mapping_data_new.push({name: data.rows.item(i).name,lat:data.rows.item(i).lat,
        lang:data.rows.item(i).lang,accuracy:data.rows.item(i).accuracy,date:data.rows.item(i).date,branch:data.rows.item(i).branch,office:data.rows.item(i).office,
        district:data.rows.item(i).district,
        unit:data.rows.item(i).unit,wl_type:data.rows.item(i).wl_type,wl_scheme:data.rows.item(i).wl_scheme,w_status:data.rows.item(i).w_status,doA:data.rows.item(i).doA,
        doI:data.rows.item(i).doI,doC:data.rows.item(i).doC,per:data.rows.item(i).per,remark:data.rows.item(i).remark});}
        //alert(this.mapping_data_new);
      }
      }, (err) => {
        console.log('Unable to execute sql: '+JSON.stringify(err));
      });
      })
      .catch(e => console.log(JSON.stringify(e)));
    }

    exit(){
    let alert = this.alert.create({
        title: 'Confirm',
        message: 'Do you want to Delete this file?',
        buttons: [{
          text: "Delete",
         // handler: () => { this.clearKeys() }
        }, {
          text: "Cancel",
          role: 'cancel'
        }]
      })
      alert.present();
    }
  
    // clearKeys() {
    //     this.storage.clear().then(() => {
    //       console.log('Keys have been cleared');
    //     });
    //   }

      public popupalert(){
       let alert = this.alert.create({
          title: 'Message',
          message: 'Data Uploaded Successfully',
          buttons: [
             {
            text: "Ok",
            role: 'cancel'
          }]
        })
        alert.present();
      }

}
