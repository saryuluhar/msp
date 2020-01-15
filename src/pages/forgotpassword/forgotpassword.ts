import { Component ,OnInit,ElementRef, AfterViewInit} from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Loading ,ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DashboardPage } from '../dashboard/dashboard';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/takeWhile'
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { UrlsetupProvider } from '../../providers/urlsetup/urlsetup';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  authForm: FormGroup;
  data:any;
  public type = 'password';
  public showPass = false;
  skip='sucessfullogin'
  loading:Loading;
  user_data=[];
  loginkey='sucessfullogin';
  constructor(private sqlite: SQLite,public toastCtrl: ToastController,public loadingCtrl: LoadingController,
    public storage: Storage,public navCtrl: NavController, fb: FormBuilder, public http: Http ,public navParams :NavParams) {

     this.data = {};
        this.data.username = '';
        this.data.password='';
        this.data.cpassword='';
      
        this.storage.get('sucessfullogin').then((data) =>{
        var skipmessage=data;
     
      });
        this.authForm = fb.group({
          'username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
          'password': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
          'cpassword': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])]});
     
  }

  chckpassword(){
    var password=this.data.password;
    var cpassword=this.data.cpassword;
    if(password==cpassword){
      this.resetpassword();
    }else{
      alert("Password Not Matched");
    }
  }

      resetpassword() {
        var contact_no=this.data.username;
        var password=this.data.password;
        var cpassword=this.data.cpassword;
        this.loading = this.loadingCtrl.create({content : "Log In ..."});
        this.loading.present()
        
      //var url = 'http://m2.mrsac.org.in:8080/MSPHC-API/api/auth/resetpassword'
       var url = 'http://43.241.63.17:8080/MSPHC-API/api/auth/resetpassword';    
          var headers = new Headers()
         headers.append('Content-Type', 'application/json');
         let options = new RequestOptions({ headers: headers });
       // let body =   "&contact_no=" + contact_no + "&password="+password;
        let data=JSON.stringify({newpassword:cpassword,contactno:contact_no});
      
        return new Promise(resolve => {
        this.http.post(url, data, options).map(res => res.json()).subscribe(
                      data => {
                        var res_mes=data.message;
                        alert(res_mes)
  
                        if(contact_no!=null){
                          let toast = this.toastCtrl.create({
                            message: res_mes,
                            duration: 3000,
                            position: 'top'
                          });
                          this.navCtrl.push(LoginPage).then(() => {
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
    })
    .then((db: SQLiteObject) => {
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
    })
    
    .catch(e => alert(JSON.stringify(e)));
   // alert(this.username);
  } 
  

    }

