import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
var date ;
import {  ActionSheetController, ToastController, Platform, LoadingController, Loading ,AlertController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import 'rxjs/add/observable/fromEvent';
import { UrlsetupProvider } from '../../providers/urlsetup/urlsetup';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Geolocation } from '@ionic-native/geolocation';
declare var cordova: any;
var lat1,lng1,acc,date,date1,date2,finaldate;
let loading;
var currentName;
  import * as moment from 'moment';
  
  import { Http, Headers, RequestOptions} from '@angular/http';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/catch';
  import { Base64 } from '@ionic-native/base64';
  import { DatePipe } from '@angular/common'
  import {  ModalController } from 'ionic-angular';
  //SELECT a.* ,b.ps_name FROM registration a JOIN master_unit_table_r1 b ON a.level3 = b.ps_code WHERE contact_no='9021555525' and password='123456'
  //SELECT  a.id,a.contact_no,a.password,a.officialname,a.designation,a.branch,a.sevarthid,a.email,a.level0,a.level1,a.level2,a.level3 , b.ps_name from registration a  JOIN master_unit_table_r1 b ON a.level3 = b.level3 WHERE contact_no="8082664483" and password="e10adc3949ba59abbe56e057f20f883e"

  //SELECT a.* ,b.ps_name FROM registration a JOIN master_unit_table_r1 b ON a.level3 = b.level3  WHERE contact_no="8082664483" and password="e10adc3949ba59abbe56e057f20f883e"
//UPDATE  `master_unit_table_r1`  SET branch ="NULL" WHERE branch = ""
 @Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage  implements OnInit {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    cameraDirection:0,
    correctOrientation: true,
    targetWidth:600,
    targetHeight:600,
    allowEdit:true
  }
  public currentDate: any;
  public timestamp: any;
  public chosenDate: String;
    lastImage: string = null;lastImage1: string = null;lastImage2: string = null;
    loading: Loading;
    items: any;imgnames:any;hide:boolean = true;
    DateList : any = [];
    modified:any;vessel:any;start_date:any;
    event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false }; //remark='null'
    minDate = new Date().toISOString();
    branch:any;office:any;district:any;names:any;mapping:any;schme:'';status:'';doa;doi;doc;per:'';remark;small_lat:any;small_lng:any;
    filename:string;
    filecontents:string;
    dirname='MSPHC';dirPath;uploadpath:string;base64Files:any;filecontentdata:string;newFileName:any;;fourth:any;
    showThis:boolean;statusdata:string
    Arraydata:any=[];
    wa_code:any;wat_code:any;txtfile:'';imagepath_png:any;level0:any;level1:any;level2:any;
    level3:any;sender_name:any;mob_no:any;designation:any;emailaddress:any;imei_code:any;version:any;storeimage:any;storefinalpathimage:any
    solitdata1=[];
    showThiss:boolean;
    officesname:any;splitlat:any;spiltlng:any;schemename:any;
    error:any={isError:false,errorMessage:''};
    modal: any;public unregisterBackButtonAction: any;
    preference:any;prefrance:any=[];work_code:any;work_status:string;
    image1:any;image2:any;image3:any;
    imagebycommaseperated:any=[];
    sqlstoreimagename:any;
    textnewFileName:any;
    imagenames:any; imagebycomma_1:any=[];
    scheme_master:any=[];
    checkschemecount:any;fixedlat:any;fixedlng:any;fixedacc:any;
    office_name;range_office_name;

    username:any
    contactno:any
    pmc_name:any
    contractor:any
    resion:any
    useremail:any

    projectList:any=[];
    Work_Type:any=[];
    Wings:any=[];
    selectedwings:any;
    selecetdworkyype:any;
    WingArrayData:any=[];
    WorktypeArraydata:any=[];
    block_code:any;
    pid:any;
    project_name:any;
    clickedImagePath:any;
  clickedImagePath1:any;
  clickedImagePath2:any;
  device1:any;

    constructor(private modalCtrl: ModalController,public datepipe: DatePipe,private geolocation: Geolocation,public alertCtrl :AlertController,private base64: Base64,public http:Http,private navParams: NavParams,public navCtrl: NavController,
      public locationTracker: LocationTrackerProvider,private locationAccuracy: LocationAccuracy,private camera: Camera, private transfer: Transfer, 
      private file: File, private filePath: FilePath,public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController,public platform: Platform, 
       public loadingCtrl: LoadingController,public loadingController:LoadingController,public storage: Storage,
       private device: Device,public alert: AlertController,
       public _state: UrlsetupProvider,private sqlite: SQLite) {
      this.currentDate = (new Date()).toLocaleString();
      let preselectedDate = moment(this.navParams.get('selectedDay')).format();
      this.event.startTime = preselectedDate;
      this.event.endTime = preselectedDate;
       this.chosenDate = this.currentDate;
      this.storage.get('myStore').then((data) => {
      this.items = data;
      console.log(data);
     
  });
//   this.storage.get('office').then((data) =>{
//     this.office = data;
//     console.log(this.office)
//   });
  
//   this.storage.get('district').then((data) =>{
//     this.district = data;
//     console.log(this.district)
//   });

//   this.storage.get('branch').then((data) =>{
//     this.branch = data;
//    console.log(this.branch)

//    if(this.branch=='Range'){
//     this.officesname='Range Office'
//     this.showThiss=true;
//     this.office=this.district;
//     this.district=this.office
  
//   }else{
//     this.officesname='Office Name'
//     this.showThiss=false;
//    }
//     });


// this.storage.get('image').then((data) =>{
//   this.imagepath_png = data;
  
// });
// this.storage.get('l0').then((data) =>{
  
//   this.level0 = data;
//   ;
  
// });
// this.storage.get('l1').then((data) =>{
//   this.level1 = data;
  
  
// });
// this.storage.get('l2').then((data) =>{
//   this.level2 = data;
  
// });
// this.storage.get('l3').then((data) =>{
//   this.level3 = data;
  
  
//   });
  
  

//   this.storage.set("checkinsert",this.checkschemecount);
 

}


ngOnInit() {
  this.registration();
  this.enableLocation();
  this.start();
  this.getuid();
  this.ionViewDidLoad();
  this.GetSchememasterdata();
 
  // this.getWingList();
  // this.getWorktypeList();
  
  }
  ditems;
  public getuid()
  {
  var ditems=[{key:'uuid',value: this.device.uuid}];
  this.ditems=ditems;
}

ionViewDidLoad() {}

getprojectList(pmc_name,contractor_name) {
  this.loading = this.loadingController.create({content : " Loading  ..."});
this.loading.present();
 this._state. loadprojectList(pmc_name,contractor_name).subscribe(res => {
      this.projectList = res.ProjectList;
      // const st = '{"ProjectList":[{"level0":"DG_HQ","level1":"RGIG04","level2":"SPO_BEE_RGIG04","level3":"SPO_BEE_RGIG04","region_id":"REG_AUR","project_name":"Construction of RPI Building and 241 quarters for S.P.Beed at Beed","type_of_building":"Both","address":"CTS No. 9126 Beed Shivar.","architect":"Disha Architect  nashik","project_management_consultant":"Designer People","pid":61}]}';
      // this.projectList = JSON.parse(st).ProjectList;
      this.loading.dismissAll();
      console.log(res);  
  });
}

// getWingList() {
//   //this.loading = this.loadingController.create({});
// //this.loading.present()
//  this._state. loadWingList().subscribe(res => {
//       this.Wings = res.wings;
//      // this.loading.dismissAll();
//      // console.log(res);  
//   });
// }

// getWorktypeList() {
//  // this.loading = this.loadingController.create({});
// //this.loading.present()
//  this._state.loadWorktypeList().subscribe(res => {
//       this.Work_Type = res.WorkType;
//       //this.loading.dismissAll();
//       console.log(res);  
//   });
// }
folderpath = "file:///storage/emulated/0/MSPHC/msphc_images";

public captureimage(){
if(this.pid==undefined){

  alert("Please Select Project From Dropdown");
}else if(this.statusdata==undefined){
  alert("Please Select Building Type From Dropdown");
} else{

  //this.clickImage();
  this.takePicture(this.camera.PictureSourceType.CAMERA);
}
}

public captureimage1(){

  if(this.var_picture==undefined){
    alert("Please Capture Image 1 ");
  }else{
   // this.clickImage1();

   this.takePicture2(this.camera.PictureSourceType.CAMERA);
  }

}

public captureimage2(){

  if(this.var_picture==undefined || this.var_picture1==undefined){
    alert("Please Capture Image 1 or 2 ");
  }else{
    //this.clickImage2();
    this.takePicture3(this.camera.PictureSourceType.CAMERA);
  }
}


clickImage(){
  this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.clickedImagePath = 'data:image/jpeg;base64,' + imageData;
   // alert(this.clickedImagePath)
    this.storage.get('base64').then((data) =>{
     //alert(data)
     var d = new Date(),
     n = d.getTime(),
     newFileName =  moment(n).format("DDMMYYYY_HHmmss")+".png";
     var dateTimeString = moment(n).format("DDMMYYYY_HHmmss");
     this.newFileName = n;
     this.timestamp=newFileName;
     var ditems=[{key:'uuid',value: this.device.uuid}];
     var  deviceid=this.device.uuid;
     //alert(deviceid);
    
     
      this.timestamp=newFileName;
      var  deviceid=this.device.uuid
      this.saveBase64(data,deviceid+"_"+this.timestamp);
      this.saveimgfileinfoldwer(this.folderpath+deviceid+"_"+this.timestamp);
      //alert(this.fixedlat)
      });
  
   }, (err) => {
    // Handle error
   });
}

clickImage1(){
  this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.clickedImagePath1 = 'data:image/jpeg;base64,' + imageData;
    this.storage.get('base641').then((data) =>{
      //alert(data)
      var d = new Date(),
      n = d.getTime(),
      newFileName =  moment(n).format("DDMMYYYY_HHmmss")+".png";
      var dateTimeString = moment(n).format("DDMMYYYY_HHmmss");
      this.newFileName = n;
      this.timestamp=newFileName
      var  deviceid=this.device.uuid;
     //alert(deviceid);
       this.saveBase64(data,deviceid+"_"+this.timestamp);
       this.saveimgfileinfoldwer2(this.folderpath+deviceid+"_"+this.timestamp);
       //alert(this.fixedlat)
       });
   

   }, (err) => {
    // Handle error
   });
}

clickImage2(){
  this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.clickedImagePath2 = 'data:image/jpeg;base64,' + imageData;
    this.storage.get('base642').then((data) =>{
      //alert(data)
      var d = new Date(),
      n = d.getTime(),
      newFileName =  moment(n).format("DDMMYYYY_HHmmss")+".png";
      var dateTimeString = moment(n).format("DDMMYYYY_HHmmss");
      this.newFileName = n;
      this.timestamp=newFileName
      var  deviceid=this.device.uuid;
       this.saveBase64(data,deviceid+"_"+this.timestamp);
       this.saveimgfileinfoldwer3(this.folderpath+deviceid+"_"+this.timestamp);
       //alert(this.fixedlat)
       });
   
   }, (err) => {
    // Handle error
   });
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
  // alert("data"+   data)
  // alert("name"+   name)
  this.file.writeFile(this.file.externalRootDirectory+"/MSPHC/msphc_images", name, blob)
.then(()=>{
  resolve(this.folderpath+name);
  //alert(this.folderpath+name)
 this.saveimgfile(this.folderpath+name)
})
.catch((err)=>{
  alert(' 337 HOME   -- > error writing blob')
  reject(err)
})

}).catch(error=>{
 alert("error  " +error );
});

})
}

public presentActionSheet() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Select Image Source',
    buttons: [
     {
        text: ' Use Camera',
        icon: !this.platform.is('ios') ? 'camera' : null,
        handler: () => {
         this.imageCapture();
         }
      },
      {
        text: 'Cancel',
        icon: !this.platform.is('ios') ? 'close' : null,
        cssClass:'red-color',
        role: 'cancel'
      }
    ]
  });
  actionSheet.present();
}

public imageCapture(){
  this.storage.get('fixlat').then((data) =>{
    this.fixedlat = data;
    //alert(this.fixedlat)
    });

    this.storage.get('fixlng').then((data) =>{
      this.fixedlng = data;
     // alert(this.fixedlng)
      });

      this.storage.get('fixacc').then((data) =>{
        this.fixedacc = data;
       // alert(this.fixedacc)
        });
 
  if(this.locationTracker.lat==0){
    alert("Please Refresh Location")
  }else if(this.pid==undefined )
  {
    alert("Please Select Ongoing Project List")
  }else if(this.per==undefined){
   
    alert("Please Provide Work percentage")
  }else
   if(new Date(this.doc)<new Date(this.doi)){
  //     alert("Date of completion is not less than Date of Initiation")
  //   }else if(new Date(this.doi)<new Date(this.doa)){
  //     alert("Date of Initiation is not less than Date of Apporoval")
  //   }else if(new Date(this.doa)>new Date(this.currentDate)){
  //     alert("Date of Apporoval is not Greater than Current Date")
  //   }else if(new Date(this.doc)>new Date(this.currentDate)){
  //     alert("Date of Completion is not Greater than Current Date")
  //   }else if(new Date(this.doi)>new Date(this.currentDate)){
  //     alert("Date of Initiation is not Greater than Current Date")
  //    }else
    // else if(this.locationTracker.acc.toFixed(4)>"50.0000"){
    // //   alert("Your accuracy is too low .Please Refresh Location")
    // // } else 
     {
      this.takePicture(this.camera.PictureSourceType.CAMERA);
     } 
    }
}



public imagevalidation1(){

  if(this.lastImage==undefined){
    alert("Please Capture Image 1 First")
  }else{
    this.imageCapture2();
  }
}

public imagevalidation2(){

  if(this.lastImage==undefined ){
    alert("Please Capture Image 1 First")
  }else if(this.lastImage1==undefined){
    alert("Please Capture Image 2 First")
  }else{
    this.imageCapture3();
  }
}

public imageCapture2(){
 this.takePicture2(this.camera.PictureSourceType.CAMERA);
     
}

public imageCapture3(){
  this.takePicture3(this.camera.PictureSourceType.CAMERA);
}



enableLocation(){
this.locationAccuracy.canRequest().then((canRequest: boolean) => {
if(canRequest) {
this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
() => {
  loading = this.loadingController.create({content : "Logging in ,please wait..."});
  this.start();},
error => console.log('Error requesting location permissions'+JSON.stringify(error))
);}
});
}



start(){
    this.locationTracker.startTracking();
    lat1=this.locationTracker.lat.toFixed(2);
    lng1=this.locationTracker.lng.toFixed(2);
    var str = this.locationTracker.lat.toString();
    this.splitlat = str.slice(0,5);
    var str2 = this.locationTracker.lng.toString();
    this.spiltlng = str2.slice(0,5);
    date = new Date().toISOString();
    date1=new Date().toLocaleDateString();

    date2=new Date().toLocaleTimeString();
    finaldate=date1+" "+date2;
    var newdatedata =date=new Date();
    let latest_date =this.datepipe.transform(newdatedata, 'dd-MM-yyyy HH:mm:ss ');
    acc=this.locationTracker.acc;
    var len=this.locationTracker.lat.toString();
    this.storage.set("fixlat",this.locationTracker.lat);
    this.storage.set("fixlng",this.locationTracker.lng);
    this.storage.set("fixacc",this.locationTracker.acc);
   }

refresh_location(){
    this.locationTracker.startTracking();
    this.loading = this.loadingController.create({content : "Refreshng ..."});
    this.loading.present()
    var latss=this.locationTracker.lat.toString().length;
    setTimeout(() => {
    this.loading.dismissAll();
   }, 4000);
    lat1=this.locationTracker.lat.toFixed(2);
    lng1=this.locationTracker.lng.toFixed(2);
    var str = this.locationTracker.lat.toString();
    this.splitlat = str.slice(0,5);
    var str2 = this.locationTracker.lng.toString();
    this.spiltlng = str2.slice(0,5);
    date = new Date().toISOString();
    date1=new Date().toLocaleDateString();
    date2=new Date().toLocaleTimeString();
    finaldate=date1+" "+date2;
    acc=this.locationTracker.acc;
    var len=this.locationTracker.lat.toString();
   }
   var_picture;
   var_picture1;
   var_picture2;
public takePicture(sourceType) {
  var options = {
    quality:100,
    sourceType: sourceType,
    correctOrientation: true,
    targetWidth:600,
    targetHeight:600,
    allowEdit:true
    };
    this.createFileName();
    this.camera.getPicture(options).then(imageData => {
      let filename = imageData.substring(imageData.lastIndexOf('/')+1);
    let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
         //then use the method reasDataURL  btw. var_picture is ur image variable
         this.file.readAsDataURL(path, filename).then(res=> this.var_picture = res  );
  
    }, (err) => {
    this.presentToast('Error while selecting image.');
    });
    }

    public takePicture2(sourceType) {
      var options = {
        quality:100,
        sourceType: sourceType,
        correctOrientation: true,
        targetWidth:600,
        targetHeight:600,
        allowEdit:true
        };
        this.createFileName2();
        this.camera.getPicture(options).then(imageData => {
          let filename = imageData.substring(imageData.lastIndexOf('/')+1);
        let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
             //then use the method reasDataURL  btw. var_picture is ur image variable
             this.file.readAsDataURL(path, filename).then(res=> this.var_picture1 = res  );
      
        }, (err) => {
        this.presentToast('Error while selecting image.');
        });
        }

        public takePicture3(sourceType) {
          var options = {
            quality:100,
            sourceType: sourceType,
            correctOrientation: true,
            targetWidth:600,
            targetHeight:600,
            allowEdit:true
            };
            this.createFileName3();
            this.camera.getPicture(options).then(imageData => {
              let filename = imageData.substring(imageData.lastIndexOf('/')+1);
            let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
                 //then use the method reasDataURL  btw. var_picture is ur image variable
                 this.file.readAsDataURL(path, filename).then(res=> this.var_picture2 = res  );
          
            }, (err) => {
            this.presentToast('Error while selecting image.');
            });
            }


private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  moment(n).format("DDMMYYYY_HHmmss")+".png";
  var dateTimeString = moment(n).format("DDMMYYYY_HHmmss");
  this.newFileName = n;
  this.timestamp=newFileName
    return newFileName;
}

private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.storage.get('imagestore').then((data) =>{
    this.storeimage = data;
    var splitdata =[];
    var solitdata1=[];
    splitdata = this.storeimage.split('/storage/emulated/0/Pictures/')
    var second=splitdata[0];
    var third=splitdata[1];
    solitdata1= third.split('.png')
    var fourth=solitdata1[0];
    this.storage.set('finalpath', fourth);
});

    this.loading = this.loadingController.create({content : " Saving ..."});
    this.loading.present()
    setTimeout(() => {
      this.loading.dismissAll();
     }, 3000);
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
    if(this.lastImage)
    this.storage.set('lastImage', this.lastImage);
    this.loading.dismissAll();
   }, error => {
    this.presentToast('Error while storing file.');
    this.loading.dismissAll();
  });
}


private createFileName2() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  moment(n).format("DDMMYYYY_HHmmss")+".png";
  var dateTimeString = moment(n).format("DDMMYYYY_HHmmss");
  this.newFileName = n;
  this.timestamp=newFileName
    return newFileName;
}

private copyFileToLocalDir2(namePath, currentName, newFileName) {
  alert(namePath)
  alert(currentName)
  alert(newFileName)
  
    this.loading = this.loadingController.create({content : " Saving ..."});
    
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage1 = newFileName;
   alert("566")


    
    this.storage.set('lastImage', this.lastImage1);
    this.loading.dismissAll();
   }, error => {
    this.presentToast('Error while storing file.');
    this.loading.dismissAll();
  });
}

private createFileName3() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  moment(n).format("DDMMYYYY_HHmmss")+".png";
  var dateTimeString = moment(n).format("DDMMYYYY_HHmmss");
  this.newFileName = n;
  this.timestamp=newFileName
    return newFileName;
}

private copyFileToLocalDir3(namePath, currentName, newFileName) {
 
    this.loading = this.loadingController.create({content : " Saving ..."});
    this.loading.present()
    setTimeout(() => {
      this.loading.dismissAll();
     }, 3000);
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage2 = newFileName;
    this.storage.set('lastImage', this.lastImage2);
    this.loading.dismissAll();
   }, error => {
    this.presentToast('Error while storing file.');
    this.loading.dismissAll();
  });
}

private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}

optionsFnScheme(){
  this.schme=this.schme;
  this.Arraydata=this.schme;
  this.pid=this.Arraydata.id;
  this.district=this.Arraydata.district;
  this.project_name=this.Arraydata.project_name;

 // this.storage.set('pid', this.pid);
  // alert(this.pid)
  // alert(this.project_name)
  }

  optionsFnWing(){
    this.selectedwings=this.selectedwings;
    this.WingArrayData=this.selectedwings;
    this.block_code=this.WingArrayData.block_code;
   
    // alert(this.block_code)
    }

    optionsFnWorktype(){
      this.selecetdworkyype=this.selecetdworkyype;
      this.WorktypeArraydata=this.selecetdworkyype;
      this.work_code=this.WorktypeArraydata.work_code;
     
      // alert(this.work_code)
      }

  fixed_location(){
    this.locationTracker.startTracking();
    this.loading = this.loadingController.create({content : "Saving Location ..."});
    this.loading.present();
    this.storage.set("fixlat",this.locationTracker.lat);
    this.storage.set("fixlng",this.locationTracker.lng);
    this.storage.set("fixacc",this.locationTracker.acc);

    setTimeout(() => {
      this.loading.dismissAll();
     }, 2000);

  }

  public saveimgfileinfoldwer(path){
  
    this.storage.set('path11', path);
    
     this.sqlite.create({
     name: 'msphc.db',
     location: 'default'
     })
     .then((db: SQLiteObject) => {
     db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)',[])
     .then(() => console.log("img  Executed"))
     .catch(e => console.log(e));
     db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
     .then(() => console.log(" img INDERTed"))
     .catch(e => console.log(e));
     db.executeSql('select * from tbl_image',[]).then((data) => {
     this.storeimg = [];
     if(data.rows.length > 0) {
     for(var i = 0; i < data.rows.length; i++) {
     this.storeimg.push({name: data.rows.item(i).name});}
     //alert(this.storeimg);
    this.storage.set('image', path);
  
     }
     }, (err) => {
     alert('Unable to execute sql: '+JSON.stringify(err));
     });
     })
     .catch(e => alert(JSON.stringify(e)));
     
     }


     public saveimgfileinfoldwer2(path){
  
      this.storage.set('path22', path);
      
       this.sqlite.create({
       name: 'msphc.db',
       location: 'default'
       })
       .then((db: SQLiteObject) => {
       db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)',[])
       .then(() => console.log("img  Executed"))
       .catch(e => console.log(e));
       db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
       .then(() => console.log(" img INDERTed"))
       .catch(e => console.log(e));
       db.executeSql('select * from tbl_image',[]).then((data) => {
       this.storeimg = [];
       if(data.rows.length > 0) {
       for(var i = 0; i < data.rows.length; i++) {
       this.storeimg.push({name: data.rows.item(i).name});}
       alert(this.storeimg);
      this.storage.set('image', path);
    
       }
       }, (err) => {
       alert('Unable to execute sql: '+JSON.stringify(err));
       });
       })
       .catch(e => alert(JSON.stringify(e)));
       
       }


       public saveimgfileinfoldwer3(path){
  
        this.storage.set('path33', path);
        
         this.sqlite.create({
         name: 'msphc.db',
         location: 'default'
         })
         .then((db: SQLiteObject) => {
         db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)',[])
         .then(() => console.log("img  Executed"))
         .catch(e => console.log(e));
         db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
         .then(() => console.log(" img INDERTed"))
         .catch(e => console.log(e));
         db.executeSql('select * from tbl_image',[]).then((data) => {
         this.storeimg = [];
         if(data.rows.length > 0) {
         for(var i = 0; i < data.rows.length; i++) {
         this.storeimg.push({name: data.rows.item(i).name});}
         //alert(this.storeimg);
        this.storage.set('image', path);
      
         }
         }, (err) => {
         alert('Unable to execute sql: '+JSON.stringify(err));
         });
         })
         .catch(e => alert(JSON.stringify(e)));
         
         }
    
  
  

  

optionsFnStatus(){
  this.statusdata=this.status;
  
 if(this.statusdata=='Completed'){
    this.showThis = true;
   }
   else
   {
    this.showThis = false;
    }
}

optionsFnPercentage(){
  this.per=this.per;
}

mapping_data = [];
public checkimagedata(){
    // if( this.lastImage==undefined){
    //   alert("Please Capture Image")
    // }else{
    //   this.storage.get('finalpath').then((data) =>{
    //   this.storefinalpathimage = data;
    //   this.sav();
    // });
    // }

    this.sav();
   }
 sav(){
  this.storage.get('path').then((data) =>{
    var newpath = data;
    //alert("path"+newpath)
    var splitdata =[];
    var solitdata1=[];
    splitdata = newpath.split('/storage/emulated/0/MSPHC/msphc_images')
    var second=splitdata[0];
    var third=splitdata[1];
    solitdata1= third.split('.png')
    this.fourth=solitdata1[0];
    //this.savenewimgfile(this.fourth);
    this.storage.set('finalpath', this.fourth);
    });

    this.storage.get('path1').then((data) =>{
      var newpath = data;
      //alert("path1"+newpath)
      var image1 =[];
      var image1_1=[];
      image1 = newpath.split('/storage/emulated/0/MSPHC/msphc_images')
      var second=image1[0];
      var third=image1[1];
      image1_1= third.split('.png')
      this.image1=image1_1[0];
     // this.savenewimgfile(this.fourth);
     // this.storage.set('image1', this.image1);
      });

      this.storage.get('path2').then((data) =>{
        var newpath = data;
        //alert("path2"+newpath)
        var image2 =[];
        var image2_1=[];
        image2 = newpath.split('/storage/emulated/0/MSPHC/msphc_images')
        var second=image2[0];
        var third=image2[1];
        image2_1= third.split('.png')
        this.image2=image2_1[0];
        //this.savenewimgfile(this.image2);
       // this.storage.set('image2', this.image2);
        });

  // var combine2images= this.fourth + this.image1+this.image2;
   //alert("first"+combine2images);
   //this.savenewimgfile(combine2images)
    this.sqlite.create({
     name: 'msphc.db',
    
    location: 'default'
    })
    .then((db: SQLiteObject) => {
    this.storage.get('finalpath').then((data) =>{

      // this.storage.get('image1').then((data) =>{
      //   this.image1=data
      //   alert("image1"+ this.image1)

      // });
      // this.storage.get('image2').then((data) =>{
      //   this.image2=data
        
      //  alert("image2"+ this.image2)

      // });

      if( this.image1==undefined){
        this.sqlstoreimagename = this.fourth;
       // alert(" 1 image "+this.sqlstoreimagename)
        this.textnewFileName=this.fourth+".txt";
       // alert(" 1  this.textnewFileName"+this.textnewFileName)

        }else if(this.image2 ==undefined){

          this.sqlstoreimagename = this.fourth+ "," +this.image1;
         // alert(" 2 image "+this.sqlstoreimagename)
          this.textnewFileName=this.fourth+ "_" +this.image1+".txt"
         // alert(" 2  this.textnewFileName"+this.textnewFileName)
            }else{
              this.sqlstoreimagename = this.fourth+ "," +this.image1 +"," + this.image2;
             // alert(this.sqlstoreimagename)
              this.textnewFileName = this.fourth+ "_" +this.image1 +"_" + this.image2 + ".txt";
             // alert(" All this.textnewFileName"+this.textnewFileName)
            }
    // this.sqlstoreimagename = this.fourth+ "," +this.image1 +"," + this.image2;
    // alert("second"+this.sqlstoreimagename)
     this.savenewimgfile(this.sqlstoreimagename)
    // alert("writeToFile "+this.textnewFileName)
    this.writeToFile(this.sqlstoreimagename,this.textnewFileName,this.filecontentdata,this.dirname);
     db.executeSql('CREATE TABLE IF NOT EXISTS mapping_data(id INTEGER PRIMARY KEY AUTOINCREMENT,name,lat,lang,accuracy,date,branch,office,district,unit,wl_type,wl_scheme,w_status,per,remark)', [])
    .then(() => console.log("Query Executed"))
    .catch(e => console.log(e));
    var imageName = this.fourth 
    db.executeSql('INSERT INTO mapping_data(name,lat,lang,accuracy,date,branch,office,district,unit,wl_type,wl_scheme,w_status,doA,doI,doC,per,remark) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [this.sqlstoreimagename,this.locationTracker.lat.toFixed(6),this.locationTracker.lng.toFixed(6),this.locationTracker.acc.toFixed(6),finaldate,this.branch,this.office,this.district,this.district,this.schemename,this.schemename, this.statusdata,this.doa,this.doi,this.doc,"NA",this.remark])
    .then(() => console.log("Query Executed"))
    .catch(e => console.log(e));
 });
    
    db.executeSql('select * from mapping_data', []).then((data) => {
    this.mapping_data = [];
    if(data.rows.length > 0) {
    for(var i = 0; i < data.rows.length; i++) {
    this.mapping_data.push({name: data.rows.item(i).name,lat:data.rows.item(i).lat,
      lang:data.rows.item(i).lang,accuracy:data.rows.item(i).accuracy,date:data.rows.item(i).date,branch:data.rows.item(i).branch,office:data.rows.item(i).office,
      district:data.rows.item(i).district,
      unit:data.rows.item(i).unit,wl_type:data.rows.item(i).wl_type,wl_scheme:data.rows.item(i).wl_scheme,w_status:data.rows.item(i).w_status,doA:data.rows.item(i).doA,
      doI:data.rows.item(i).doI,doC:data.rows.item(i).doC,per:data.rows.item(i).per,remark:data.rows.item(i).remark});}
   }
    }, (err) => {
    console.log('Unable to execute sql: '+JSON.stringify(err));
    });
    })
    .catch(e => console.log(JSON.stringify(e)));
     }
     
storenewimg=[];


public savenewimgfile(path){
  //alert("StoreIn table    PID ---   >   "+this.pid)
   this.sqlite.create({
     name: 'msphc.db',
     location: 'default'
     })
     .then((db: SQLiteObject) => {
     db.executeSql('CREATE TABLE IF NOT EXISTS tblnew_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name,pid)', [])
     .then(() => console.log("img  Executed"))
     .catch(e => console.log(e));
     db.executeSql('INSERT INTO tblnew_image(name,pid) VALUES(?,?)', [path,this.pid])
     .then(() => console.log(" img INDERTed"))
     .catch(e => console.log(e));
     db.executeSql('select * from tblnew_image', []).then((data) => {
     this.storenewimg = [];
     if(data.rows.length > 0) {
     for(var i = 0; i < data.rows.length; i++) {
     this.storenewimg.push({name: data.rows.item(i).name});}
      this.storage.set('image', path);
  }
     }, (err) => {
     alert('Unable to execute sql: '+JSON.stringify(err));
     });
     })
     .catch(e => alert(JSON.stringify(e)));
    }


    public GetSchememasterdata(){
     
      this.sqlite.create({
      name: 'msphc.db',
      location: 'default'
      })
      .then((db: SQLiteObject) => {
        db.executeSql('select * from tbl_scheme_master', []).then((data) => {
          this.scheme_master = [];
          if(data.rows.length > 0) {
          for(var i = 0; i < data.rows.length; i++) {
           this.scheme_master.push({id: data.rows.item(i).id,wa_code: data.rows.item(i).wa_code,wat_code: data.rows.item(i).wat_code,wa_name: data.rows.item(i).wa_name});}
         console.log(this.scheme_master)
       //  this.storage.set("checkinsert",size);
         
       }
          }, (err) => {
          console.log('Unable to execute sql: '+JSON.stringify(err));
          });
     
      //   db.executeSql('select * from tbl_scheme_master', []).then((data) => {
      //     this.checkschemecount=data;
          
      //     alert("json"+JSON.stringify(data));
      //    alert("all count"+this.checkschemecount)
      
      // }, (err) => {
      //   console.log('Unable to execute sql: '+JSON.stringify(err));
      // });
      })
      .catch(e => alert(JSON.stringify(e))); }

    public saveSchemesMaster(wa_name,id,wa_code,wat_code,size){
     
     
       this.sqlite.create({
         name: 'msphc.db',
         location: 'default'
         })
         .then((db: SQLiteObject) => {
         db.executeSql('CREATE TABLE IF NOT EXISTS tbl_scheme_master(id,wa_code,wat_code,wa_name)', [])
         .then(() => console.log("img  Executed"))
         .catch(e => console.log(e));
         db.executeSql('INSERT INTO tbl_scheme_master(id,wa_code,wat_code,wa_name) VALUES(?,?,?,?)', [id,wa_code,wat_code,wa_name])
         .then(() => console.log(" img INDERTed"))
         .catch(e => console.log(e));
         db.executeSql('select * from tbl_scheme_master', []).then((data) => {
         this.scheme_master = [];
         if(data.rows.length > 0) {
         for(var i = 0; i < data.rows.length; i++) {
          this.scheme_master.push({id: data.rows.item(i).id,wa_code: data.rows.item(i).wa_code,wat_code: data.rows.item(i).wat_code,wa_name: data.rows.item(i).wa_name});}
        console.log(this.scheme_master)
      
        this.storage.set("checkinsert",size);
        
      }
         }, (err) => {
        console.log('Unable to execute sql: '+JSON.stringify(err));
         });
         })
         .catch(e => console.log(JSON.stringify(e)));
        }

 public pathForImage(img) {
    if (img === null) {
    return '';
  } else {
  // alert(img)
    //this.photos.push(img);
     // this.photos.reverse();
    return cordova.file.dataDirectory + img;
   }
}

public pathForImage2(img2) {
  if (img2 === null) {
  return '';
} else {
// alert(img)
  //this.photos.push(img);
   // this.photos.reverse();
  return cordova.file.dataDirectory + img2;
 }
}
public pathForImage3(img3) {
  if (img3 === null) {
  return '';
} else {
// alert(img)
  //this.photos.push(img);
   // this.photos.reverse();
  return cordova.file.dataDirectory + img3;
 }
}


storeimg=[];
public saveimgfile(path){
 
   this.sqlite.create({
   name: 'msphc.db',
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
  
  this.storage.set('image', path);

   }
   }, (err) => {
   alert('Unable to execute sql: '+JSON.stringify(err));
   });
   })
   .catch(e => alert(JSON.stringify(e)));
  
   }

user_data = [];
public registration(){
  this.sqlite.create({
  name: 'msphc.db',
  location: 'default'
  })
  .then((db: SQLiteObject) => {
 db.executeSql('select * from registration', []).then((data) => {
  this.user_data = [];
  if(data.rows.length > 0) {
  for(var i = 0; i < data.rows.length; i++) {
  this.user_data.push({
    official_name: data.rows.item(i).official_name,
    mob_no:data.rows.item(i).mob_no,
    pmc:data.rows.item(i).pmc,
    contractor:data.rows.item(i).contractor,
    resion:data.rows.item(i).resion,
    email:data.rows.item(i).email
  
  });
   
  this.username=data.rows.item(i).official_name
  this.contactno=data.rows.item(i).mob_no
  this.pmc_name=data.rows.item(i).pmc
  this.contractor=data.rows.item(i).contractor
  this.resion=data.rows.item(i).resion
  this.useremail=data.rows.item(i).email
  this.getprojectList( this.pmc_name,this.contractor);
  //alert(this.username)
 }
  }
  }, (err) => {
  console.log('Unable to execute sql: '+JSON.stringify(err));
  });
  })
  .catch(e => console.log(JSON.stringify(e)));
 
}  
writeToFile(filesnames,filename,filecontents,dirname){
  //alert("writetofile" +filename);
  this.imagebycommaseperated=filesnames.split(',');

  if(filesnames!=undefined){

    this.imagebycomma_1=filesnames.split(',');
     // alert("array1"+this.imagebycomma_1);
  }


  if(this.imagebycomma_1[1]==undefined && this.imagebycomma_1[2]==undefined){
    this.imagenames=this.imagebycomma_1[0];
  
 }else if(this.imagebycomma_1[1]==undefined){
   this.imagenames=this.imagebycomma_1[0];
   
 }else if( this.imagebycomma_1[2]==undefined)
 {
   this.imagenames=this.imagebycomma_1[0]+","+this.imagebycomma_1[1];
  
 }else
 {
   this. imagenames=this.imagebycomma_1[0]+","+this.imagebycomma_1[1]+","+this.imagebycomma_1[2];
  
 }
 
 
  this.filename=filename;
  this.dirname=dirname;
  let result= this.file.createDir(this.file.externalRootDirectory,this.dirname,true);
    result.then(data=>{
   this.dirPath=data.toURL();
   this.uploadpath=this.dirPath+filename;
    if(this.remark==undefined){
     this.remark='NA'
    }
    if(this.doc==undefined){ 
      this.doc='NA'
    }
    if(this.doi==undefined){
      this.doi='NA'
    }
    if(this.doa==undefined){
      this.doa='NA'
    }
  
    this. filecontentdata= 
      btoa(this.project_name) + "," + btoa(this.pid) + ","  + btoa(this.statusdata) +","   + btoa("NA") + "," + btoa(this.locationTracker.lat.toFixed(4)) +"," + btoa(this.locationTracker.lng.toFixed(4)) + "," + btoa(this.locationTracker.acc.toFixed(4)) + "," + btoa(finaldate) + "," + btoa(this.username) + "," + btoa(this.contactno) + "," + btoa(this.useremail) +"," + btoa(this.device.uuid) +"," + btoa(this.remark) +"," + btoa("1.0") +"," + btoa(this.imagenames)+"," + btoa(this.resion)+"," + btoa(this.pmc_name) +"," + btoa(this.contractor) ;
    
      
  //this. filecontentdata= this.branch + "," +this.level0+ ","+this.level1+ "," +this.level2+ "," +this.level3+ "," +this.wat_code+ ","+ this.statusdata+ ","+this.wa_code+  ","+this.doa+ ","+this.doi+ ","+this.doc+ "," +this.per+","+this.locationTracker.lat.toFixed(4)+ ","+this.locationTracker.lng.toFixed(4)+ ","+this.locationTracker.acc.toFixed(4)+ ","+finaldate+ ","+this.sender_name+ ","+this.mob_no+ ","+this.designation+ ","+this.emailaddress+","+this.device.uuid+","+this.remark+","+"1.0"+","+this.fourth;
  this.file.writeFile(data.toURL(),this.filename, this.filecontentdata,{replace:true});
  this.storage.remove("path11");
              this.storage.remove("path22");
              this.storage.remove("path33");
  this.savetextfile();
}).catch(error=>{
  alert("error  " +error );
 });
 }

storetext=[];
public savetextfile(){
 this.sqlite.create({
   name: 'msphc.db',
   location: 'default'
   })
   .then((db: SQLiteObject) => {
   db.executeSql('CREATE TABLE IF NOT EXISTS textfile(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
   .then(() => console.log("TXT Executed"))
   .catch(e => console.log(e));
   db.executeSql('INSERT INTO textfile(name) VALUES(?)', [this.uploadpath])
   .then(() => console.log("TXT INDERTed"))
   .catch(e => console.log(e));
   db.executeSql('select * from textfile', []).then((data) => {
   this.storetext = [];
   if(data.rows.length > 0) {
   for(var i = 0; i < data.rows.length; i++) {
   this.storetext.push({name: data.rows.item(i).name});}
   //this.DataSavedToast();
  //  this.storage.remove('path1');
  //  this.storage.remove('path2');
  //  this.storage.remove('finalpath');
   
   this.showAlert();
  //  this.navCtrl.pop();
  //  this.navCtrl.push(HomePage);
  
   }
   }, (err) => {
  console.log('Unable to execute sql: '+JSON.stringify(err));
   });
   })
   .catch(e => console.log(JSON.stringify(e)));
 }
//  DataSavedToast() {
//   let toast = this.toastCtrl.create({
//     message: 'Data Saved Successfully',
//     showCloseButton:true,
//     position: 'middle',
//     closeButtonText:"Ok",
//     dismissOnPageChange:true,
//     cssClass: "changeToast"
//   });

//   toast.onDidDismiss(() => {
//   this.navCtrl.push(HomePage).then(() => {
//     const index = this.navCtrl.getActive().index;
//     this.navCtrl.remove(0, index);
//   });
//   });

//   toast.present();
// }

showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Message',
    subTitle: 'Data saved Successfully',
    buttons: [
      {
         text: 'Ok',
        
         handler: () => {
          this.storage.remove('path');
          this.storage.remove('path1');
           this.storage.remove('path2');
           this.storage.remove('fixlat');
           this.storage.remove('fixlng');
           this.storage.remove('fixacc');
         
          this.navCtrl.pop({animate:false});
          this.navCtrl.push(HomePage);
          }
       }
      ],
  });
  alert.present();
}





}

//SELECT department,level0,level1,level2,level3,wat_code,work_id,work_status1,work_status2,work_status3,wa_code,approval_date,initiation_date,completion_date,per_completion1,per_completion2,per_completion3,lat,lng,accuracy1,accuracy2,accuracy3,date,date1,date2,date3,sendername1,sendername2,sendername3,mobilenumber1,mobilenumber2,mobilenumber3,designation1,designation2,designation3,emailaddress1,emailaddress2,emailaddress3,imei_code1,imei_code2,imei_code3,remarks1,remarks2,remarks3,version,file_name1,file_name2,file_name3 from mapping_data WHERE level0='DG_HQ' and level1='RGCM03' and level2='RGCM03' and level3='RGCM03' and wa_code='SER02' and work_id='000CPO_THA_RGCM03SER0205'
