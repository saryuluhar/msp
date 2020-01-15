import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams ,LoadingController, Loading ,ToastController} from 'ionic-angular';
@Injectable()
export class UrlsetupProvider {
    department : any = [];
    loading: Loading;
    //Server_url="http://m2.mrsac.org.in:8080/MSPHC-API/noauth"
   Server_url="http://43.241.63.17:8080/MSPHC-API/noauth"
  constructor(public loadingController:LoadingController,public _http: Http) {
        console.log('Hello Url Provider');
        //let hash = Md5.hashStr("password");
        
    }

    loadContractorList() {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json'); 
        return this._http.get(this.Server_url+`/contractor_list`,{headers: headers})
            .map(res => res.json());
    }

    loadRegions() {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json'); 
        return this._http.get(this.Server_url+`/divisions`,{headers: headers})
            .map(res => res.json());
    }

    loadprojectList(pmc,contractor) {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json'); 
        return this._http.get(this.Server_url+`/data/` +pmc+ "/" + contractor,{headers: headers})
            .map(res => res.json());
    }
  

    loadPMC_LST() {
        let headers = new Headers();
            headers.append('Content-Type', 'application/json');  
          
        return this._http.get(this.Server_url+`/pmc_list`,{headers: headers})
            .map(res => res.json());
    }
  

}
