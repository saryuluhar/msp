import { Component } from '@angular/core';
import { NavController, NavParams ,LoadingController, Loading ,ToastController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Http, Headers, Response,URLSearchParams ,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LoginPage } from '../login/login';

import { UrlsetupProvider } from '../../providers/urlsetup/urlsetup';
//import { Storage } from '@ionic/storage';
import { DashboardPage } from '../dashboard/dashboard';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


import { DatePipe } from '@angular/common'


@Component({
  selector: 'page-create-email',
  templateUrl: 'create-email.html'
})
export class CreateEmailPage {
  data:any;
  errorMsg: string;
  createForm2 = null;
  mailId:any;
  EmailIds:any;
  loading: Loading;
  CityRanges : any = [];
  branches : any = [];
  CityRangesoriginal : any = [];
  District: any = [];
  branch:any;
  city:any;
  level1:any;
  Arraydata: any = [];
   level1data:any;
   level0data:any;
   level2data:any;
   level3data:any;
  branchdata:any;
    rank:any;
    rankdata:any;
    ps_name:any;
    district:any;
    districtData:any;
    ArrayDistrcitdata: any = [];
    dlevel1data:any;
   dlevel0data:any;
   dlevel2data:any;
   dlevel3data:any;
   user_data = [];
   showThis:boolean;
   usercretd='created'
   loginstatus:any;
   office:any;
   usercreated : any = [];
   date:any;
   latest_date:String;
   res_status:boolean
   skip='sucessfullogin'
   rangedustrcit:any;
   brach_name;
   ArrayBranch: any = [];
   pmc:any;
   regionData:any  = [];
   regionnmae:any;

   pmcname1:any;
   contarctorname:any;
   loginkey='sucessfullogin';

   Server_url="http://m2.mrsac.org.in:8080/MSPHC-API/noauth"
   // Server_url="http://43.241.63.17:8080/MSPHC-API/noauth"
   
    
  constructor( public datepipe: DatePipe,public navCtrl: NavController, public navParams: NavParams,
    private builder: FormBuilder, public http:Http, fb: FormBuilder,
     public loadingCtrl: LoadingController,public loadingController:LoadingController,public toastCtrl: ToastController,
     public _state: UrlsetupProvider,
     private sqlite: SQLite) {
    this.data = {};
    this.data.fullname = '';
    this.data.email = '';
    this.data.password = '';
    this.data.cpassword = '';
    this.data.address = '';
    this.data.contact = '';
    this.data.pincode='';
    this.data.response = '';
    this.data.branch='';
    this.data.rank='';
    this.data.district='';
    this.data.SevarthID='';
   
   // this.http = http;
    this.createForm2 = builder.group({
      
      'mailId': ['',Validators.required],
      'contact': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'pincode': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
      'fullname': [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      'officename': [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      'SevarthID': [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      'areacode': [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      'telphone': [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      'branch': [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      'rank': [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      'district': [null, Validators.compose([Validators.required, Validators.minLength(1)])]
    })
    console.log(' this.mailId', this.mailId);
    this.getbranchs();
   this.getranks();
   this.getRegions();
   this.office="Office";
   this.date = new Date().toISOString();
   var newdatedata =this.date=new Date();
   this.latest_date =this.datepipe.transform(newdatedata, 'yyyy-MM-dd HH:mm:ss');
 
 }

 getbranchs() {
  this.loading = this.loadingController.create({});
    this.loading.present()
    this._state.loadPMC_LST().subscribe(res => {
      this.branches = res.PMC;
      this.loading.dismissAll();
      console.log(res);  
  });
}
  getranks() {
    this.loading = this.loadingController.create({});
  this.loading.present()
   this._state. loadContractorList().subscribe(res => {
        this.CityRanges = res.Contractor;
        this.loading.dismissAll();
        console.log(res);  
    });
  }

  getRegions() {
    this.loading = this.loadingController.create({});
    this.loading.present()
    this._state. loadRegions().subscribe(res => {
        this.regionData = res.Region;
        this.loading.dismissAll();
        console.log(res);  
    });
  }

  public optionsFn(): void { 
    this.Arraydata=this.city;
    this.level1data= this.Arraydata.level1;
    this.level0data=this.Arraydata.level0;
    this.level2data=this.Arraydata.level2;
    this.level3data=this.Arraydata.level3;
    this.ps_name=this.Arraydata.ps_name;
    console.log(this.Arraydata); 
    var citycode=this.city;
  //this.loadCityranges(this.level1data);
  }

  

  public optionsrank() : void{
    this.rankdata=this.rank;
   //alert(this.rank)
   
  }

  public selectsregion(){
    this.regionnmae=this.regionnmae;
    //alert(this.regionnmae);

  }

  getBranchData() {
    this.branchdata=this.pmc;
    
   
 }

  public signup(){
    if(this.branchdata==undefined || this.ps_name==undefined ||   this.rankdata==undefined ){
      alert("Please fill all details")
    }else{
      //this.doLogins();
    }

  }


 

  registrtion() {
      var officenmae = this.data.office;
      var email=this.mailId;
      var mobileno=this.data.contact;
      var SevarthID=this.data.SevarthID;
      var password=this.data.password;
      
      // alert(officenmae)
      // alert(email)
      // alert(mobileno)
      // alert(password)
      
     
    
      this.loading = this.loadingCtrl.create({content : "Registering ..."});
      this.loading.present()
    // var url = 'http://mrsac.maharashtra.gov.in/MobilePhp/insertpis.php';
      //var url = "http://192.168.64.2:8080/insertpis.php";
     
      var url = 'http://43.241.63.17:8080/MSPHC-API/api/auth/signup'
      //var url = 'http://m2.mrsac.org.in:8080/MSPHC-API/api/auth/signup'
    //  var url = 'http://localhost:8080/api/auth/signup';
;      var headers = new Headers()
       headers.append('Content-Type', 'application/json');
       let options = new RequestOptions({ headers: headers });
     
    
      // let body =  "officialname=" +officenmae + "&email=" + email + "&contact_no=" + mobileno   + 
      // "&designation=" + this.rankdata +
      // "&branch=" + this.brach_name +"&level0=" + this.level0data 
      // +"&level1=" + this.level1data +"&level2="+this.level2data +
      //  "&level3="+this.level3data+"&sevarthID="+SevarthID+"&password="+password+
      // "&created_date="+this.latest_date + "&updated_date="+this.latest_date;

      let data=JSON.stringify({name:officenmae,pmc_name:this.branchdata,email:email,password:password,contractor_name: this.rankdata,region:this.regionnmae,username:mobileno});
      // alert("this.districtData  "  + this.districtData)
       //alert("this.ps_name  "  + data)
      

     // this.otpsend(mobileno,officenmae,email,this.rankdata,this.data.SevarthID,this.brach_name,this.ps_name,this.districtData,this.level0data,this.level1data,this.level2data,this.level3data,this.latest_date,password);
      return new Promise(resolve => {
      this.http.post(url, data, options).map(res => res.json()).subscribe(
                    data => {
                      var status = data.success;
                     
                      var messege=data.message;

                      if(status==true){
                        this.loading.dismissAll();
                       alert(messege)
                       // this.branchdata  --------------- > PMC NAME
                         // this.rankdtaa  --------------- > Contactor NAME
                       this.registration(officenmae,email,password,mobileno,this.branchdata,this.rankdata,this.regionnmae);
                      
                      }else{
                        this.loading.dismissAll();
                        alert(messege);
                        
                      }   
                 },
                    err => {
                      alert("err"+err);
                      this.loading.dismissAll();
                    }
                );  
  });  
 }      

  
 public registration(name,useremail,password,mobileno1,pmc,contractor,region){
  //alert("data")
  this.sqlite.create({
  name: 'msphc.db',
  location: 'default'
  })
  .then((db: SQLiteObject) => {
  db.executeSql('Drop TABLE registration',[])
  db.executeSql('CREATE TABLE IF NOT EXISTS registration(id INTEGER PRIMARY KEY AUTOINCREMENT, official_name ,mob_no, pmc, email, contractor,resion)',[])
  .then(() => console.log("CEATE Query Executed"))
  .catch(e => alert(e));
  var officenmae = this.data.office;
  var email=this.mailId;
  var mobileno=this.data.contact;
  var password=this.data.password;  
 db.executeSql('INSERT INTO registration(official_name ,mob_no, pmc, email, contractor,resion) VALUES(?,?,?,?,?,?)', [name,mobileno1,pmc,useremail,contractor,region])
  .then(() => console.log("INSERT Query Executed"))
  .catch(e => alert(e));
  db.executeSql('select * from registration',[]).then((data) => {
  this.user_data = [];
  if(data.rows.length > 0) {
  for(var i = 0; i < data.rows.length; i++) {
   // alert("INSERTING........................")
  this.user_data.push({
    
    official_name: data.rows.item(i).official_name,
    mob_no:data.rows.item(i).mob_no,
    pmc:data.rows.item(i).pmc,
    contractor:data.rows.item(i).contractor,
    resion:data.rows.item(i).resion,
   
    email:data.rows.item(i).email
    
  });
var name=data.rows.item(i).official_name;
 // alert(name)
  //alert("INSERTING DONE........................")
   
  }
   }
   //this.storage.set('login', this.loginkey);
   this.navCtrl.push(DashboardPage);
  }, (err) => {
  alert('Unable to execute sql: '+JSON.stringify(err));
  });
  })
  .catch(e => alert(JSON.stringify(e)));
 // alert(this.username);
} 

  
    
      
}

