import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform, LoadingController, Loading,ToastController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { CreateEmailPage } from '../create-email/create-email';
import { DashboardPage } from '../dashboard/dashboard';

import { Http,Headers, RequestOptions } from '@angular/http';

import { Storage } from '@ionic/storage';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';


var parameter1;
var parameter2;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authForm: FormGroup;
  data:any;
  public type = 'password';
  public showPass = false;
  skip='sucessfullogin'
  loading:Loading;
  user_data=[];
  loginkey='sucessfullogin';
  constructor(private sqlite: SQLite,public toastCtrl: ToastController,public loadingCtrl: LoadingController,
    public storage: Storage,public navCtrl: NavController, fb: FormBuilder, public http: Http ,public navParams :NavParams,public platform: Platform) {

     this.data = {};
        this.data.username = '';
        this.data.password='';
        parameter1 = navParams.get('param1');   
        parameter2 = navParams.get('param2');
        this.storage.get('sucessfullogin').then((data) =>{
        var skipmessage=data;});


        this.authForm = fb.group({
          'username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
          'password': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],});
     
  }

  
     submitForm() {
    this.navCtrl.push(DashboardPage);
    }

   showPassword() {
    this.showPass = !this.showPass;
    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

      passwordType: string = 'password';
      passwordIcon: string = 'eye-off';

 hideShowPassword() {
     this.passwordType = this.platform.is('android') && this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.platform.is('android') && this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';}

    public register() {
        this.navCtrl.push(CreateEmailPage);
      }

      public testlogin() {
        this.navCtrl.push(DashboardPage);
      }

       public resetpassword() {
         this.navCtrl.push(ForgotpasswordPage);
       }



      login() {
        var contact_no=this.data.username;
        var password=this.data.password;
        
        this.loading = this.loadingCtrl.create({content : "Log In ..."});
        this.loading.present()
       var url = 'http://43.241.63.17:8080/MSPHC-API/api/auth/signin'; 
      // var url = 'http://m2.mrsac.org.in:8080/MSPHC-API/api/auth/signin';    
      // var url = 'http://localhost:8080/api/auth/signin'; 
          var headers = new Headers()
         headers.append('Content-Type', 'application/json');
         let options = new RequestOptions({ headers: headers });
       // let body =   "&contact_no=" + contact_no + "&password="+password;
        let data=JSON.stringify({contact_no:contact_no,password:password});
      console.log(data);
        return new Promise(resolve => {
        this.http.post(url, data, options).map(res => res.json()).subscribe(
                      data => {
                      
                       
                        // this.storage.set('branch', branch);
                        // this.storage.set('l0', level0);
                        //     this.storage.set('l1', level1);
                        //     this.storage.set('l2', level2);
                        //     this.storage.set('l3', level3);

                        //     this.storage.set('branch', branch);
                        //  this.storage.set('office', ps_name);
                        //  this.storage.set('district',rnageoffice);
                        // this.storage.set('l0', level0);
                        // this.storage.set('l1', level1);
                        // this.storage.set('l2', level2);
                        // this.storage.set('l3', level3);

                        var contact_no=data.conatct_no;
                        var name=data.name;
                        var contractor_name=data.contractor_name;
                        var pmc_name=data.pmc_name;
                        var email=data.email;
                        var region=data.region;
           
                        //  alert(name + "  " + contractor_name + "  " + pmc_name + "  " + email + "  " +region +  "" + contact_no )
                       
                           
                        var messege="Login Successfully";
                        var res_mes=data.message;
  
                        if(contact_no!=null){
                          let toast = this.toastCtrl.create({
                            message: messege,
                            duration: 3000,
                            position: 'top'
                          });
                          this.registration(name,email,contact_no,pmc_name,contractor_name,region);
                          this.storage.set('login', this.loginkey);
                          this.navCtrl.push(DashboardPage).then(() => {
                            const index = this.navCtrl.getActive().index;
                            this.navCtrl.remove(0, index);
                          });
                         
                        toast.present();
                          setTimeout(() => {
                            this.loading.dismissAll();
                            
                          }, 2500);
                        }else{
                          var message=data.message;
                          alert("Please enter correct username and password ");
                          this.loading.dismissAll();
                        }   
                   },
                      err => {
                        alert("err"+err);
                        this.loading.dismissAll();
                      }
                  );  
    });  
   }    
   
   public registration(name,useremail,mobileno1,pmc,contractor,region){
    //alert("data")
    this.sqlite.create({
    name: 'msphc.db',
    location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('Drop TABLE registration',[])
    db.executeSql('CREATE TABLE IF NOT EXISTS registration(id INTEGER PRIMARY KEY AUTOINCREMENT, official_name ,mob_no, pmc, email, contractor,resion)',[])
    .then(() => console.log("CEATE Query Executed"))
    .catch(e => alert(e));
    db.executeSql("select * from registration",[]).then((data) => {

      if (data.rows.length > 0) {

      }else{
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
         this.storage.set('login', this.loginkey);
         this.navCtrl.push(DashboardPage);
        
        }, (err) => {
        alert('Unable to execute sql: '+JSON.stringify(err));
        });
      }
    })
    }).catch(e => alert(JSON.stringify(e)));
   // alert(this.username);
  } 
}