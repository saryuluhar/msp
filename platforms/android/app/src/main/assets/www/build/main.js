webpackJsonp([7],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendmanagerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_send__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__unsend_unsend__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SendmanagerPage = /** @class */ (function () {
    // tab3Root: any = ZipPage;
    function SendmanagerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__unsend_unsend__["a" /* UnsendPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__send_send__["a" /* SendPage */];
    }
    SendmanagerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabPage');
    };
    SendmanagerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sendmanager',template:/*ion-inline-start:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/sendmanager/sendmanager.html"*/'\n\n <ion-header>\n  <ion-navbar background-color="#057989" hideBackButton="true" >\n    <ion-buttons left>\n      <img height="35" src="assets/imgs/police_logo.png" />\n    </ion-buttons>\n    <ion-title style="text-align: center">\n      <label text-center style="font-size: 16px; font-family: arial; text-align: center;font-weight: bold"> Maharashtra State Police  Housing Corporation </label>\n    </ion-title>\n    <ion-buttons right>\n      <img height="35" src="assets/imgs/mrsac_logo.png" />\n    </ion-buttons>\n\n  </ion-navbar >\n  <hr/>\n  <div  style="text-align: center;color: white ; height: 33px;margin-top: 8px">\n          \n  <label    style="font-size: 14px; font-family: arial; text-align:center ;font-weight: bold;"> Send Manager </label>\n  </div>\n</ion-header>\n\n\n<ion-tabs  tabsPlacement="top" selectedIndex="0"   style="margin-top: 50px" >\n      <ion-tab [root]="tab1Root" tabTitle="Unsent" ></ion-tab>\n      <ion-tab [root]="tab2Root" tabTitle="Sent" ></ion-tab>\n     \n    </ion-tabs>  \n\n\n\n    '/*ion-inline-end:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/sendmanager/sendmanager.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SendmanagerPage);
    return SendmanagerPage;
}());

//# sourceMappingURL=sendmanager.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendPage = /** @class */ (function () {
    function SendPage(file, navCtrl, navParams, storage, sqlite) {
        this.file = file;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.sqlite = sqlite;
        this.sendimages = [];
        this.arrayindex = [];
        this.imagebycomma = [];
    }
    SendPage.prototype.ionViewDidEnter = function () {
        this.send();
    };
    SendPage.prototype.send = function () {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('SELECT DISTINCT name FROM sendimages ', []).then(function (data) {
                _this.sendimages = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.sendimages.push({ name: data.rows.item(i).name });
                    }
                }
            }, function (err) {
                //to see error do with alert
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    SendPage.prototype.optionsFn = function () {
        var _this = this;
        this.arrayindex = this.mapping;
        this.id = this.arrayindex.id;
        //alert(this.arrayindex.name);
        this.imagebycomma = this.arrayindex.name.split(',');
        // this.mappingdata=this.file.externalRootDirectory+"MSPHC/msphc_images/"+this.imagebycomma[0]+".png";
        // this.mappingdata1=this.file.externalRootDirectory+"MSPHC/msphc_images/"+this.imagebycomma[1]+".png";
        //  this.mappingdata2=this.file.externalRootDirectory+"MSPHC/msphc_images/"+this.imagebycomma[2]+".png";
        this.file.readAsDataURL(this.file.externalRootDirectory + "MSPHC/msphc_images/", this.imagebycomma[0] + ".png").then(function (res) { return _this.mappingdata = res; });
        this.file.readAsDataURL(this.file.externalRootDirectory + "MSPHC/msphc_images/", this.imagebycomma[2] + ".png").then(function (res) { return _this.mappingdata2 = res; });
        this.file.readAsDataURL(this.file.externalRootDirectory + "MSPHC/msphc_images/", this.imagebycomma[1] + ".png").then(function (res) { return _this.mappingdata1 = res; });
    };
    SendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send',template:/*ion-inline-start:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/send/send.html"*/'<!--\n  Generated template for the SentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Send files</ion-label>\n    <ion-select [(ngModel)]="mapping" (cancel)="onCancel()" (ionChange)="optionsFn()">\n        <ion-option *ngFor="let x of sendimages ; let i = index;"  [value]="{name:x.name,id:i}"> {{x.name}}</ion-option> \n        </ion-select>\n      </ion-item>\n      \n\n      <ion-list   class="container"  >\n        <div text-center style="margin-top:6%">\n          <img src="{{this.mappingdata}}">\n       </div> \n       </ion-list>\n\n\n       <ion-list   class="container"  >\n        <div text-center style="margin-top:6%">\n          <img src="{{this.mappingdata1}}" >\n       </div> \n       </ion-list>\n\n\n       <ion-list   class="container"  >\n        <div text-center style="margin-top:6%">\n          <img src="{{this.mappingdata2}}">\n       </div> \n       </ion-list>\n\n\n       <ion-item no-lines color="#fff">\n          \n        </ion-item>\n     \n</ion-content>\n'/*ion-inline-end:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/send/send.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], SendPage);
    return SendPage;
}());

//# sourceMappingURL=send.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { ImagedetailsPage } from '../imagedetails/imagedetails';











var UnsendPage = /** @class */ (function () {
    function UnsendPage(file, transfer, base64, app, device, http, navCtrl, navParams, storage, toastCtrl, alert, platform, loadingCtrl, loadingController, sqlite) {
        var _this = this;
        this.file = file;
        this.transfer = transfer;
        this.base64 = base64;
        this.app = app;
        this.device = device;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alert = alert;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.loadingController = loadingController;
        this.sqlite = sqlite;
        this.username = '';
        this.imagefile = '';
        this.itemss = [];
        this.textfile = [];
        this.mapping_data_new = [];
        this.ArrayFiledata = [];
        //arrayindex=[];
        this.arrayindex = [];
        this.imagebycomma = [];
        this.imagebycomma_1 = [];
        this.realpathimagearray = [];
        this.bodyf = new FormData();
        this.isUploading = false;
        this.uploadingProgress = {};
        this.uploadingHandler = {};
        //Server_url="http://m2.mrsac.org.in:8080/MSPHC-API/noauth"
        this.Server_url = "http://43.241.63.17:8080/MSPHC-API/noauth";
        this.gettestFlie = [];
        this.sendimages = [];
        this.storage.get('pid').then(function (data) {
            _this.pid = data;
        });
        this.storage.get('myStore').then(function (data) {
            _this.storebase64 = data;
            console.log(data);
        });
        this.savenew();
    }
    UnsendPage.prototype.ngOnInit = function () {
        this.savenew();
        this.getuid();
        this.GETFiles();
        //alert(this.pid);
    };
    UnsendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnsentPage');
        this.savenew();
        // this.gettextfiles();
    };
    UnsendPage.prototype.getuid = function () {
        var device_id = this.device.uuid;
    };
    UnsendPage.prototype.savenew = function () {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('select * from tblnew_image', []).then(function (data) {
                _this.itemss = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.itemss.push({
                            name: data.rows.item(i).name,
                            pid: data.rows.item(i).pid
                        });
                    }
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    UnsendPage.prototype.GETFiles = function () {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('select * from textfile', []).then(function (data) {
                _this.gettestFlie = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.gettestFlie.push({ name: data.rows.item(i).name });
                    }
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    UnsendPage.prototype.optionsFn = function () {
        var _this = this;
        //alert(" 0"+ this.arrayindex);
        this.arrayindex = this.mapping;
        this.id = this.arrayindex.id;
        this.pid = this.arrayindex.pid;
        // alert(this.pid)
        this.imagebycomma = this.arrayindex.name.split(',');
        // alert(" 0"+ this.imagebycomma[0]);
        //alert(" 1"+this.imagebycomma[1]);
        // alert(" 2"+this.imagebycomma[2]);
        if (this.arrayindex.name.split(',') != undefined) {
            this.imagebycomma_1 = this.arrayindex.name.split(',');
            this.realpathimagearray = this.file.externalRootDirectory + "MSPHC/msphc_images/" + this.imagebycomma_1[0] + ".png" + "," + this.file.externalRootDirectory + "MSPHC/msphc_images/" + this.imagebycomma_1[1] + ".png";
            // alert("array1"+this.realpathimagearray);
        }
        //this.mappingdata=this.file.dataDirectory+"MSPHC/msphc_images/"+this.imagebycomma_1[0]+".png";
        this.file.readAsDataURL(this.file.externalRootDirectory + "MSPHC/msphc_images/", this.imagebycomma_1[0] + ".png").then(function (res) { return _this.mappingdata = res; });
        //  var ImageData = this.file.externalRootDirectory.replace(/^file:\/\//, '');
        // alert("00  "+ this.mappingdata)
        //  alert("00  "+ ImageData+"MSPHC/msphc_images/"+this.imagebycomma_1[0]+".png")
        // this.immgpath=ImageData+"MSPHC/msphc_images/"+this.imagebycomma_1[0]+".png";
        //alert(this.immgpath);
        this.file.readAsDataURL(this.file.externalRootDirectory + "MSPHC/msphc_images/", this.imagebycomma_1[2] + ".png").then(function (res) { return _this.mappingdata2 = res; });
        this.file.readAsDataURL(this.file.externalRootDirectory + "MSPHC/msphc_images/", this.imagebycomma_1[1] + ".png").then(function (res) { return _this.mappingdata1 = res; });
        //this.mappingdata2=this.file.dataDirectory+"MSPHC/msphc_images/"+this.imagebycomma_1[2]+".png";
        //alert("01  "+ this.mappingdata2)
        // this.mappingdata1=this.file.dataDirectory+"MSPHC/msphc_images/"+this.imagebycomma_1[1]+".png";
        //alert("02  "+ this.mappingdata1)
    };
    UnsendPage.prototype.SendImage = function () {
        if (this.mappingdata == undefined) {
            alert("Please Select image");
        }
        else {
            //alert(this.mappingdata)
            if (this.imagebycomma_1[0] != undefined) {
                this.uploadImage(this.imagebycomma_1[0]);
            }
            else {
                var alert_1 = this.alert.create({
                    title: 'Message',
                    message: 'Your device not saved first image.Please do mapping again.',
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                alert_1.present();
            }
        }
    };
    UnsendPage.prototype.uploadImage = function (path) {
        var _this = this;
        var url = this.Server_url + "/fileupload/" + this.pid;
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
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            //alert("Response ----  ?  "+data.response )
            var respo = '"{"response":"Image saved successfully"}"';
            //alert("Response  String ----  ?  "+respo )
            if (data.response == "Image saved successfully" && _this.imagebycomma_1[1] != undefined) {
                _this.uploadImage1(_this.imagebycomma_1[1]);
            }
            else {
                _this.uploadtxtfile(_this.file.externalRootDirectory + "MSPHC/" + _this.imagebycomma[0] + ".txt", _this.imagebycomma[0] + ".txt");
            }
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast(err + 'Error while uploading file.');
        });
    };
    UnsendPage.prototype.uploadImage1 = function (path1) {
        var _this = this;
        var url = this.Server_url + "/fileupload/" + this.pid;
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
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            if (data.response == "Image saved successfully" && _this.imagebycomma_1[2] != undefined) {
                _this.uploadImage2(_this.imagebycomma_1[2]);
            }
            else {
                _this.uploadtxtfile(_this.file.externalRootDirectory + "MSPHC/" + _this.imagebycomma[0] + "_" + _this.imagebycomma[1] + ".txt", _this.imagebycomma[0] + "_" + _this.imagebycomma[1] + ".txt");
            }
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast(err + 'Error while uploading file.');
        });
    };
    UnsendPage.prototype.uploadImage2 = function (path2) {
        var _this = this;
        var url = this.Server_url + "/fileupload/" + this.pid;
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
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            _this.loading.dismissAll();
            if (data.response == "Image saved successfully") {
                _this.uploadtxtfile(_this.file.externalRootDirectory + "MSPHC/" + _this.imagebycomma[0] + "_" + _this.imagebycomma[1] + "_" + _this.imagebycomma[2] + ".txt", _this.imagebycomma[0] + "_" + _this.imagebycomma[1] + "_" + _this.imagebycomma[2] + ".txt");
            }
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast(err + 'Error while uploading file.');
        });
    };
    UnsendPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    UnsendPage.prototype.optionsFntxt = function () {
        this.mappingtextdata = this.textmapping;
        this.getdata(this.mappingtextdata);
    };
    UnsendPage.prototype.getdata = function (txtpath) {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql("select * from textfile where  name" + "='" + txtpath + "'", []).then(function (data) {
                _this.mapping_data_new = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                    }
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
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
    UnsendPage.prototype.GetSvaedDetails = function (id) {
        var _this = this;
        // alert("code"+ id)
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql("select * from mapping_data ", []).then(function (data) {
                _this.mapping_data_new = [];
                _this.mapping_data_new.push({ name: data.rows.item(id).name, lat: data.rows.item(id).lat,
                    lang: data.rows.item(id).lang, accuracy: data.rows.item(id).accuracy, date: data.rows.item(id).date, branch: data.rows.item(id).branch, office: data.rows.item(id).office,
                    district: data.rows.item(id).district,
                    unit: data.rows.item(id).unit, wl_type: data.rows.item(id).wl_type, wl_scheme: data.rows.item(id).wl_scheme, w_status: data.rows.item(id).w_status, doA: data.rows.item(id).doA,
                    doI: data.rows.item(id).doI, doC: data.rows.item(id).doC, per: data.rows.item(id).per, remark: data.rows.item(id).remark });
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    UnsendPage.prototype.uploadtxtfile = function (textfileuploadpath, filepath) {
        var _this = this;
        var url = this.Server_url + "/textfileupload";
        var targetPath = textfileuploadpath;
        var filename = filepath;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            var alert = _this.alert.create({
                title: 'Message',
                message: data.response + '  Data Uploaded Successfully',
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            alert.present();
            _this.mappingdata = undefined;
            _this.mappingdata1 = undefined;
            _this.mappingdata2 = undefined;
            _this.sucessfullysendimages(_this.imagebycomma_1);
            _this.removeSuccessfulsendimages(_this.imagebycomma_1);
            _this.savenew();
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
    };
    UnsendPage.prototype.sucessfullysendimages = function (path) {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS sendimages(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
                .then(function () { return console.log("sendimg  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO sendimages(name) VALUES(?)', [path])
                .then(function () { return console.log(" sendimg INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from sendimages', []).then(function (data) {
                _this.sendimages = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.sendimages.push({ name: data.rows.item(i).name });
                    }
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    UnsendPage.prototype.removeSuccessfulsendimages = function (path) {
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql("delete from tblnew_image where  name" + "='" + path + "'", []).then(function (data) {
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    UnsendPage.prototype.remove = function (no) {
        (this.arrayindex).splice(no, 1);
    };
    ;
    UnsendPage.prototype.gettxt = function (imagpath) {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql("select * from textfile where  name" + "='" + imagpath + "'", []).then(function (data) {
                _this.mapping_data_new = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.mapping_data_new.push({ name: data.rows.item(i).name, lat: data.rows.item(i).lat,
                            lang: data.rows.item(i).lang, accuracy: data.rows.item(i).accuracy, date: data.rows.item(i).date, branch: data.rows.item(i).branch, office: data.rows.item(i).office,
                            district: data.rows.item(i).district,
                            unit: data.rows.item(i).unit, wl_type: data.rows.item(i).wl_type, wl_scheme: data.rows.item(i).wl_scheme, w_status: data.rows.item(i).w_status, doA: data.rows.item(i).doA,
                            doI: data.rows.item(i).doI, doC: data.rows.item(i).doC, per: data.rows.item(i).per, remark: data.rows.item(i).remark });
                    }
                    //alert(this.mapping_data_new);
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    UnsendPage.prototype.exit = function () {
        var alert = this.alert.create({
            title: 'Confirm',
            message: 'Do you want to Delete this file?',
            buttons: [{
                    text: "Delete",
                }, {
                    text: "Cancel",
                    role: 'cancel'
                }]
        });
        alert.present();
    };
    // clearKeys() {
    //     this.storage.clear().then(() => {
    //       console.log('Keys have been cleared');
    //     });
    //   }
    UnsendPage.prototype.popupalert = function () {
        var alert = this.alert.create({
            title: 'Message',
            message: 'Data Uploaded Successfully',
            buttons: [
                {
                    text: "Ok",
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    UnsendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-unsend',template:/*ion-inline-start:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/unsend/unsend.html"*/'<ion-header>\n  <ion-navbar hideBackButton="false">\n   </ion-navbar>\n </ion-header>\n \n <ion-content padding>\n   \n     \n   <ion-item>\n       <ion-label>Select file to send</ion-label>\n       <ion-select [(ngModel)]="mapping" (cancel)="onCancel()" (ionChange)="optionsFn()">\n           <ion-option *ngFor="let x of itemss ; let i = index;"  [value]="{name:x.name,id:i,pid:x.pid}"> {{x.name}}</ion-option> \n           </ion-select>\n         </ion-item>\n \n     <ion-list>\n       <div text-center style="margin-top:6%">\n            <img src="{{this.mappingdata}}"  >\n        </div> \n \n        <div text-center style="margin-top:6%"> \n         <img src="{{this.mappingdata1}}">    \n      </div> \n \n      <div text-center style="margin-top:6%">\n       <img src="{{this.mappingdata2}}">\n    </div> \n \n         <div class="wrapper" style="margin-top: 2%" >\n           <button ion-button   ion-center   style="text-transform: none;background: #057989;display: none" (click)="gotoDetails()">View Details</button>\n           <button ion-button   ion-center  style="text-transform: none;background: #057989" (click)="SendImage()">Send</button>\n           <!-- <button ion-button   ion-center  (click)="uploadtxtfile()">Send txt</button> -->\n        </div>\n        </ion-list>\n        \n        <ion-item no-lines color="#fff">\n           \n             </ion-item>\n      \n </ion-content>\n \n \n      \n \n     \n       \n \n \n       \n \n      \n           \n       \n      \n       \n    \n          \n       \n    \n   \n  \n \n  \n \n '/*ion-inline-end:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/unsend/unsend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], UnsendPage);
    return UnsendPage;
}());

//# sourceMappingURL=unsend.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, sqlite) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.user_data = [];
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.ngOnInit = function () {
        this.registration();
    };
    ProfilePage.prototype.registration = function () {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('select * from registration', []).then(function (data) {
                _this.user_data = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.user_data.push({
                            official_name: data.rows.item(i).official_name,
                            mob_no: data.rows.item(i).mob_no,
                            pmc: data.rows.item(i).pmc,
                            contractor: data.rows.item(i).contractor,
                            resion: data.rows.item(i).resion,
                            email: data.rows.item(i).email
                        });
                    }
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    ProfilePage.prototype.back = function () {
        var _this = this;
        //this.navCtrl.push(DashboardPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar background-color="#057989" hideBackButton="true" scroll="false">\n    <ion-buttons left>\n      <img height="35" src="assets/imgs/police_logo.png" />\n    </ion-buttons>\n    <ion-title >\n      <label text-center style="font-size: 16px; font-family: arial; text-align: center;font-weight: bold"> Maharashtra State Police  Housing Corporation </label>\n    </ion-title>\n    <ion-buttons right>\n      <img height="35" src="assets/imgs/mrsac_logo.png" />\n    </ion-buttons>\n</ion-navbar >\n  </ion-header>\n\n\n\n<ion-content >\n    <ion-card style="border:solid 1px #057989">\n        <ion-card-header color="white" style="padding:4px;color:white;text-align:left;margin: 5px" >Profile Details</ion-card-header>\n        <ion-card-content margin-top=20px>\n          <div class="modal" ion-item text-wrap *ngFor="let item of user_data" style="background: #eee;border: 1px solid #888">\n\n              <div class="item item-text-wrap" style="font-size:100%; margin-bottom:5px;padding: 2%">\n                  <strong> Officer name       : </strong>  {{ item.official_name }}\n               </div>\n\n               <div class="item item-text-wrap"  style="font-size:100%; margin-bottom:5px;padding: 2%">\n                  <strong>Project Management Consultant : </strong>   {{ item.pmc }}\n               </div>\n      \n               <div class="item item-text-wrap"  style="font-size:100%; margin-bottom:5px;padding: 2%" >\n                  <strong>Contractor Name      : </strong>   {{ item.contractor }}\n               </div>\n\n               <div class="item item-text-wrap"  style="font-size:100%; margin-bottom:5px;padding: 2%">\n                  <strong> Region      : </strong>  {{ item.resion }}\n               </div>\n            \n            <div class="item item-text-wrap"  style="font-size:100%; margin-bottom:5px;padding: 2%" >\n                <strong> Mobile  No    : </strong>  {{ item.mob_no }}\n             </div>\n\n             <div class="item item-text-wrap"  style="font-size:100%; margin-bottom:5px;padding: 2%">\n                <strong>Email         : </strong>   {{ item.email }}\n             </div>\n    \n            \n    \n           </div>\n            </ion-card-content>\n            \n            <div class="wrapper" >\n                <button ion-button   ion-center    style="background: #057989 ;text-transform: none" (click)="back()">Back</button>\n             </div>\n    </ion-card>\n\n   \n</ion-content>\n'/*ion-inline-end:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_timer__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeWhile__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import {Observable} from 'rxjs/Observable';






var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(sqlite, toastCtrl, loadingCtrl, storage, navCtrl, fb, http, navParams) {
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.type = 'password';
        this.showPass = false;
        this.skip = 'sucessfullogin';
        this.user_data = [];
        this.loginkey = 'sucessfullogin';
        this.data = {};
        this.data.username = '';
        this.data.password = '';
        this.data.cpassword = '';
        this.storage.get('sucessfullogin').then(function (data) {
            var skipmessage = data;
        });
        this.authForm = fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)])],
            'cpassword': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)])]
        });
    }
    ForgotpasswordPage.prototype.chckpassword = function () {
        var password = this.data.password;
        var cpassword = this.data.cpassword;
        if (password == cpassword) {
            this.resetpassword();
        }
        else {
            alert("Password Not Matched");
        }
    };
    ForgotpasswordPage.prototype.resetpassword = function () {
        var _this = this;
        var contact_no = this.data.username;
        var password = this.data.password;
        var cpassword = this.data.cpassword;
        this.loading = this.loadingCtrl.create({ content: "Log In ..." });
        this.loading.present();
        //var url = 'http://m2.mrsac.org.in:8080/MSPHC-API/api/auth/resetpassword'
        var url = 'http://43.241.63.17:8080/MSPHC-API/api/auth/resetpassword';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // let body =   "&contact_no=" + contact_no + "&password="+password;
        var data = JSON.stringify({ newpassword: cpassword, contactno: contact_no });
        return new Promise(function (resolve) {
            _this.http.post(url, data, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                var res_mes = data.message;
                alert(res_mes);
                if (contact_no != null) {
                    var toast = _this.toastCtrl.create({
                        message: res_mes,
                        duration: 3000,
                        position: 'top'
                    });
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]).then(function () {
                        var index = _this.navCtrl.getActive().index;
                        _this.navCtrl.remove(0, index);
                    });
                    toast.present();
                    setTimeout(function () {
                        _this.loading.dismissAll();
                    }, 2500);
                }
                else {
                    var message = data.message;
                    alert("Please enter correct username and password ");
                    _this.loading.dismissAll();
                }
            }, function (err) {
                alert("err" + err);
                _this.loading.dismissAll();
            });
        });
    };
    ForgotpasswordPage.prototype.registration = function (name, useremail, mobileno1, pmc, contractor, region) {
        var _this = this;
        //alert("data")
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('Drop TABLE registration', []);
            db.executeSql('CREATE TABLE IF NOT EXISTS registration(id INTEGER PRIMARY KEY AUTOINCREMENT, official_name ,mob_no, pmc, email, contractor,resion)', [])
                .then(function () { return console.log("CEATE Query Executed"); })
                .catch(function (e) { return alert(e); });
            db.executeSql("select * from registration", []).then(function (data) {
                if (data.rows.length > 0) {
                }
                else {
                    db.executeSql('INSERT INTO registration(official_name ,mob_no, pmc, email, contractor,resion) VALUES(?,?,?,?,?,?)', [name, mobileno1, pmc, useremail, contractor, region])
                        .then(function () { return console.log("INSERT Query Executed"); })
                        .catch(function (e) { return alert(e); });
                    db.executeSql('select * from registration', []).then(function (data) {
                        _this.user_data = [];
                        if (data.rows.length > 0) {
                            for (var i = 0; i < data.rows.length; i++) {
                                // alert("INSERTING........................")
                                _this.user_data.push({
                                    official_name: data.rows.item(i).official_name,
                                    mob_no: data.rows.item(i).mob_no,
                                    pmc: data.rows.item(i).pmc,
                                    contractor: data.rows.item(i).contractor,
                                    resion: data.rows.item(i).resion,
                                    email: data.rows.item(i).email
                                });
                                var name = data.rows.item(i).official_name;
                                // alert(name)
                                //alert("INSERTING DONE........................")
                            }
                        }
                        _this.storage.set('login', _this.loginkey);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
                    }, function (err) {
                        alert('Unable to execute sql: ' + JSON.stringify(err));
                    });
                }
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
        // alert(this.username);
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/forgotpassword/forgotpassword.html"*/'\n<ion-content padding>\n  <ion-header>\n    <ion-navbar background-color="#057989" hideBackButton="false" scroll="false">\n      <ion-buttons left>\n        <img height="35" src="assets/imgs/police_logo.png" />\n      </ion-buttons>\n      <ion-title >\n        <label text-center style="font-size: 16px; font-family: arial; text-align: center;font-weight: bold"> Reset Password </label>\n      </ion-title>\n      <ion-buttons right>\n        <img height="35" src="assets/imgs/mrsac_logo.png" />\n      </ion-buttons>\n  </ion-navbar >\n    </ion-header>\n          <ion-card-header >\n   \n    \n\n \n  </ion-card-header>\n  <form [formGroup]="authForm" >\n    <ion-item>\n      <ion-label floating>Mobile no</ion-label>\n      <ion-input type="tel" value="" style="color: #000" [formControl]="authForm.controls[\'username\']" [ngClass]="{\'error-border\':!authForm.controls[\'username\'].valid}" [(ngModel)]="data.username" maxlength="10"></ion-input>\n      <!-- <ion-icon name="person" item-right ></ion-icon> -->\n    </ion-item><br />\n    <div class="error-box" *ngIf="authForm.controls[\'username\'].hasError(\'required\') && authForm.controls[\'username\'].touched">* Username is required!</div>\n    <div class="error-box" *ngIf="authForm.controls[\'username\'].hasError(\'minlength\') && authForm.controls[\'username\'].touched">* Minimum username length is 5!</div>\n    <div class="error-box" *ngIf="authForm.controls[\'username\'].hasError(\'maxlength\') && authForm.controls[\'username\'].touched">* Maximum username length is 10!</div>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input [formControl]="authForm.controls[\'password\']" value="" [type]="passwordType" clearOnEdit="false" [(ngModel)]="data.password"></ion-input>\n        </ion-item><br />\n\n        <ion-item>\n          <ion-label floating>Confirm Password</ion-label>\n          <ion-input [formControl]="authForm.controls[\'cpassword\']" value="" [type]="passwordType" clearOnEdit="false" [(ngModel)]="data.cpassword"></ion-input>\n            </ion-item><br />\n    <div class="error-box" *ngIf="authForm.controls[\'cpassword\'].hasError(\'required\') && authForm.controls[\'cpassword\'].touched">* Password is required!</div>\n    <div class="error-box" *ngIf="authForm.controls[\'cpassword\'].hasError(\'minlength\') && authForm.controls[\'cpassword\'].touched">* Minimum username length is 5!</div>\n    <div class="error-box" *ngIf="authForm.controls[\'cpassword\'].hasError(\'checkFirstCharacterValidatorOutput\') && authForm.controls[\'cpassword\'].touched">* Password cant\'t start with number!</div><br />\n    \n\n    <button type="submit"  ion-button full  [disabled]="!authForm.valid"style="text-transform: none;background: #057989"(click)="chckpassword()">Reset Password</button>\n\n    \n    \n    \n\n  \n  </form>\n\n  \n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/forgotpassword/forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		453,
		6
	],
	"../pages/forgotpassword/forgotpassword.module": [
		454,
		5
	],
	"../pages/login/login.module": [
		455,
		4
	],
	"../pages/profile/profile.module": [
		456,
		3
	],
	"../pages/send/send.module": [
		457,
		2
	],
	"../pages/sendmanager/sendmanager.module": [
		458,
		1
	],
	"../pages/unsend/unsend.module": [
		459,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_location_tracker_location_tracker__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_location_accuracy__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_urlsetup_urlsetup__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_base64__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var date;











var lat1, lng1, acc, date, date1, date2, finaldate;
var loading;
var currentName;







//SELECT a.* ,b.ps_name FROM registration a JOIN master_unit_table_r1 b ON a.level3 = b.ps_code WHERE contact_no='9021555525' and password='123456'
//SELECT  a.id,a.contact_no,a.password,a.officialname,a.designation,a.branch,a.sevarthid,a.email,a.level0,a.level1,a.level2,a.level3 , b.ps_name from registration a  JOIN master_unit_table_r1 b ON a.level3 = b.level3 WHERE contact_no="8082664483" and password="e10adc3949ba59abbe56e057f20f883e"
//SELECT a.* ,b.ps_name FROM registration a JOIN master_unit_table_r1 b ON a.level3 = b.level3  WHERE contact_no="8082664483" and password="e10adc3949ba59abbe56e057f20f883e"
//UPDATE  `master_unit_table_r1`  SET branch ="NULL" WHERE branch = ""
var HomePage = /** @class */ (function () {
    function HomePage(modalCtrl, datepipe, geolocation, alertCtrl, base64, http, navParams, navCtrl, locationTracker, locationAccuracy, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, loadingController, storage, device, alert, _state, sqlite) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.datepipe = datepipe;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.base64 = base64;
        this.http = http;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.locationTracker = locationTracker;
        this.locationAccuracy = locationAccuracy;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.loadingController = loadingController;
        this.storage = storage;
        this.device = device;
        this.alert = alert;
        this._state = _state;
        this.sqlite = sqlite;
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: 0,
            correctOrientation: true,
            targetWidth: 600,
            targetHeight: 600,
            allowEdit: true
        };
        this.lastImage = null;
        this.lastImage1 = null;
        this.lastImage2 = null;
        this.hide = true;
        this.DateList = [];
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false }; //remark='null'
        this.minDate = new Date().toISOString();
        this.dirname = 'MSPHC';
        this.Arraydata = [];
        this.solitdata1 = [];
        this.error = { isError: false, errorMessage: '' };
        this.prefrance = [];
        this.imagebycommaseperated = [];
        this.imagebycomma_1 = [];
        this.scheme_master = [];
        this.projectList = [];
        this.Work_Type = [];
        this.Wings = [];
        this.WingArrayData = [];
        this.WorktypeArraydata = [];
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
        this.folderpath = "file:///storage/emulated/0/MSPHC/msphc_images";
        this.mapping_data = [];
        this.storenewimg = [];
        this.storeimg = [];
        this.user_data = [];
        this.storetext = [];
        this.currentDate = (new Date()).toLocaleString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_14_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
        this.chosenDate = this.currentDate;
        this.storage.get('myStore').then(function (data) {
            _this.items = data;
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
    HomePage_1 = HomePage;
    ;
    HomePage.prototype.ngOnInit = function () {
        this.registration();
        this.enableLocation();
        this.start();
        this.getuid();
        this.ionViewDidLoad();
        this.GetSchememasterdata();
        // this.getWingList();
        // this.getWorktypeList();
    };
    HomePage.prototype.getuid = function () {
        var ditems = [{ key: 'uuid', value: this.device.uuid }];
        this.ditems = ditems;
    };
    HomePage.prototype.ionViewDidLoad = function () { };
    HomePage.prototype.getprojectList = function (pmc_name, contractor_name) {
        var _this = this;
        this.loading = this.loadingController.create({ content: " Loading  ..." });
        this.loading.present();
        this._state.loadprojectList(pmc_name, contractor_name).subscribe(function (res) {
            _this.projectList = res.ProjectList;
            // const st = '{"ProjectList":[{"level0":"DG_HQ","level1":"RGIG04","level2":"SPO_BEE_RGIG04","level3":"SPO_BEE_RGIG04","region_id":"REG_AUR","project_name":"Construction of RPI Building and 241 quarters for S.P.Beed at Beed","type_of_building":"Both","address":"CTS No. 9126 Beed Shivar.","architect":"Disha Architect  nashik","project_management_consultant":"Designer People","pid":61}]}';
            // this.projectList = JSON.parse(st).ProjectList;
            _this.loading.dismissAll();
            console.log(res);
        });
    };
    HomePage.prototype.captureimage = function () {
        if (this.pid == undefined) {
            alert("Please Select Project From Dropdown");
        }
        else if (this.statusdata == undefined) {
            alert("Please Select Building Type From Dropdown");
        }
        else {
            //this.clickImage();
            this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
    };
    HomePage.prototype.captureimage1 = function () {
        if (this.var_picture == undefined) {
            alert("Please Capture Image 1 ");
        }
        else {
            // this.clickImage1();
            this.takePicture2(this.camera.PictureSourceType.CAMERA);
        }
    };
    HomePage.prototype.captureimage2 = function () {
        if (this.var_picture == undefined || this.var_picture1 == undefined) {
            alert("Please Capture Image 1 or 2 ");
        }
        else {
            //this.clickImage2();
            this.takePicture3(this.camera.PictureSourceType.CAMERA);
        }
    };
    HomePage.prototype.clickImage = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.clickedImagePath = 'data:image/jpeg;base64,' + imageData;
            // alert(this.clickedImagePath)
            _this.storage.get('base64').then(function (data) {
                //alert(data)
                var d = new Date(), n = d.getTime(), newFileName = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss") + ".png";
                var dateTimeString = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss");
                _this.newFileName = n;
                _this.timestamp = newFileName;
                var ditems = [{ key: 'uuid', value: _this.device.uuid }];
                var deviceid = _this.device.uuid;
                //alert(deviceid);
                _this.timestamp = newFileName;
                var deviceid = _this.device.uuid;
                _this.saveBase64(data, deviceid + "_" + _this.timestamp);
                _this.saveimgfileinfoldwer(_this.folderpath + deviceid + "_" + _this.timestamp);
                //alert(this.fixedlat)
            });
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.clickImage1 = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.clickedImagePath1 = 'data:image/jpeg;base64,' + imageData;
            _this.storage.get('base641').then(function (data) {
                //alert(data)
                var d = new Date(), n = d.getTime(), newFileName = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss") + ".png";
                var dateTimeString = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss");
                _this.newFileName = n;
                _this.timestamp = newFileName;
                var deviceid = _this.device.uuid;
                //alert(deviceid);
                _this.saveBase64(data, deviceid + "_" + _this.timestamp);
                _this.saveimgfileinfoldwer2(_this.folderpath + deviceid + "_" + _this.timestamp);
                //alert(this.fixedlat)
            });
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.clickImage2 = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.clickedImagePath2 = 'data:image/jpeg;base64,' + imageData;
            _this.storage.get('base642').then(function (data) {
                //alert(data)
                var d = new Date(), n = d.getTime(), newFileName = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss") + ".png";
                var dateTimeString = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss");
                _this.newFileName = n;
                _this.timestamp = newFileName;
                var deviceid = _this.device.uuid;
                _this.saveBase64(data, deviceid + "_" + _this.timestamp);
                _this.saveimgfileinfoldwer3(_this.folderpath + deviceid + "_" + _this.timestamp);
                //alert(this.fixedlat)
            });
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.b64toBlob = function (b64Data, contentType) {
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
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    HomePage.prototype.saveBase64 = function (base64, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var realData = base64.split(",")[1];
            var blob = _this.b64toBlob(realData, 'image/png');
            var result = _this.file.createDir(_this.file.externalRootDirectory + "/MSPHC/", _this.dirname, true);
            result.then(function (data) {
                // alert("data"+   data)
                // alert("name"+   name)
                _this.file.writeFile(_this.file.externalRootDirectory + "/MSPHC/msphc_images", name, blob)
                    .then(function () {
                    resolve(_this.folderpath + name);
                    //alert(this.folderpath+name)
                    _this.saveimgfile(_this.folderpath + name);
                })
                    .catch(function (err) {
                    alert(' 337 HOME   -- > error writing blob');
                    reject(err);
                });
            }).catch(function (error) {
                alert("error  " + error);
            });
        });
    };
    HomePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: ' Use Camera',
                    icon: !this.platform.is('ios') ? 'camera' : null,
                    handler: function () {
                        _this.imageCapture();
                    }
                },
                {
                    text: 'Cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    cssClass: 'red-color',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.imageCapture = function () {
        var _this = this;
        this.storage.get('fixlat').then(function (data) {
            _this.fixedlat = data;
            //alert(this.fixedlat)
        });
        this.storage.get('fixlng').then(function (data) {
            _this.fixedlng = data;
            // alert(this.fixedlng)
        });
        this.storage.get('fixacc').then(function (data) {
            _this.fixedacc = data;
            // alert(this.fixedacc)
        });
        if (this.locationTracker.lat == 0) {
            alert("Please Refresh Location");
        }
        else if (this.pid == undefined) {
            alert("Please Select Ongoing Project List");
        }
        else if (this.per == undefined) {
            alert("Please Provide Work percentage");
        }
        else if (new Date(this.doc) < new Date(this.doi)) {
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
    };
    HomePage.prototype.imagevalidation1 = function () {
        if (this.lastImage == undefined) {
            alert("Please Capture Image 1 First");
        }
        else {
            this.imageCapture2();
        }
    };
    HomePage.prototype.imagevalidation2 = function () {
        if (this.lastImage == undefined) {
            alert("Please Capture Image 1 First");
        }
        else if (this.lastImage1 == undefined) {
            alert("Please Capture Image 2 First");
        }
        else {
            this.imageCapture3();
        }
    };
    HomePage.prototype.imageCapture2 = function () {
        this.takePicture2(this.camera.PictureSourceType.CAMERA);
    };
    HomePage.prototype.imageCapture3 = function () {
        this.takePicture3(this.camera.PictureSourceType.CAMERA);
    };
    HomePage.prototype.enableLocation = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                    loading = _this.loadingController.create({ content: "Logging in ,please wait..." });
                    _this.start();
                }, function (error) { return console.log('Error requesting location permissions' + JSON.stringify(error)); });
            }
        });
    };
    HomePage.prototype.start = function () {
        this.locationTracker.startTracking();
        lat1 = this.locationTracker.lat.toFixed(2);
        lng1 = this.locationTracker.lng.toFixed(2);
        var str = this.locationTracker.lat.toString();
        this.splitlat = str.slice(0, 5);
        var str2 = this.locationTracker.lng.toString();
        this.spiltlng = str2.slice(0, 5);
        date = new Date().toISOString();
        date1 = new Date().toLocaleDateString();
        date2 = new Date().toLocaleTimeString();
        finaldate = date1 + " " + date2;
        var newdatedata = date = new Date();
        var latest_date = this.datepipe.transform(newdatedata, 'dd-MM-yyyy HH:mm:ss ');
        acc = this.locationTracker.acc;
        var len = this.locationTracker.lat.toString();
        this.storage.set("fixlat", this.locationTracker.lat);
        this.storage.set("fixlng", this.locationTracker.lng);
        this.storage.set("fixacc", this.locationTracker.acc);
    };
    HomePage.prototype.refresh_location = function () {
        var _this = this;
        this.locationTracker.startTracking();
        this.loading = this.loadingController.create({ content: "Refreshng ..." });
        this.loading.present();
        var latss = this.locationTracker.lat.toString().length;
        setTimeout(function () {
            _this.loading.dismissAll();
        }, 4000);
        lat1 = this.locationTracker.lat.toFixed(2);
        lng1 = this.locationTracker.lng.toFixed(2);
        var str = this.locationTracker.lat.toString();
        this.splitlat = str.slice(0, 5);
        var str2 = this.locationTracker.lng.toString();
        this.spiltlng = str2.slice(0, 5);
        date = new Date().toISOString();
        date1 = new Date().toLocaleDateString();
        date2 = new Date().toLocaleTimeString();
        finaldate = date1 + " " + date2;
        acc = this.locationTracker.acc;
        var len = this.locationTracker.lat.toString();
    };
    HomePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            correctOrientation: true,
            targetWidth: 600,
            targetHeight: 600,
            allowEdit: true
        };
        this.createFileName();
        this.camera.getPicture(options).then(function (imageData) {
            var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            var path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            //then use the method reasDataURL  btw. var_picture is ur image variable
            _this.file.readAsDataURL(path, filename).then(function (res) { return _this.var_picture = res; });
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    HomePage.prototype.takePicture2 = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            correctOrientation: true,
            targetWidth: 600,
            targetHeight: 600,
            allowEdit: true
        };
        this.createFileName2();
        this.camera.getPicture(options).then(function (imageData) {
            var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            var path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            //then use the method reasDataURL  btw. var_picture is ur image variable
            _this.file.readAsDataURL(path, filename).then(function (res) { return _this.var_picture1 = res; });
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    HomePage.prototype.takePicture3 = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            correctOrientation: true,
            targetWidth: 600,
            targetHeight: 600,
            allowEdit: true
        };
        this.createFileName3();
        this.camera.getPicture(options).then(function (imageData) {
            var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            var path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            //then use the method reasDataURL  btw. var_picture is ur image variable
            _this.file.readAsDataURL(path, filename).then(function (res) { return _this.var_picture2 = res; });
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    HomePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss") + ".png";
        var dateTimeString = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss");
        this.newFileName = n;
        this.timestamp = newFileName;
        return newFileName;
    };
    HomePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.storage.get('imagestore').then(function (data) {
            _this.storeimage = data;
            var splitdata = [];
            var solitdata1 = [];
            splitdata = _this.storeimage.split('/storage/emulated/0/Pictures/');
            var second = splitdata[0];
            var third = splitdata[1];
            solitdata1 = third.split('.png');
            var fourth = solitdata1[0];
            _this.storage.set('finalpath', fourth);
        });
        this.loading = this.loadingController.create({ content: " Saving ..." });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismissAll();
        }, 3000);
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            if (_this.lastImage)
                _this.storage.set('lastImage', _this.lastImage);
            _this.loading.dismissAll();
        }, function (error) {
            _this.presentToast('Error while storing file.');
            _this.loading.dismissAll();
        });
    };
    HomePage.prototype.createFileName2 = function () {
        var d = new Date(), n = d.getTime(), newFileName = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss") + ".png";
        var dateTimeString = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss");
        this.newFileName = n;
        this.timestamp = newFileName;
        return newFileName;
    };
    HomePage.prototype.copyFileToLocalDir2 = function (namePath, currentName, newFileName) {
        var _this = this;
        alert(namePath);
        alert(currentName);
        alert(newFileName);
        this.loading = this.loadingController.create({ content: " Saving ..." });
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage1 = newFileName;
            alert("566");
            _this.storage.set('lastImage', _this.lastImage1);
            _this.loading.dismissAll();
        }, function (error) {
            _this.presentToast('Error while storing file.');
            _this.loading.dismissAll();
        });
    };
    HomePage.prototype.createFileName3 = function () {
        var d = new Date(), n = d.getTime(), newFileName = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss") + ".png";
        var dateTimeString = __WEBPACK_IMPORTED_MODULE_14_moment__(n).format("DDMMYYYY_HHmmss");
        this.newFileName = n;
        this.timestamp = newFileName;
        return newFileName;
    };
    HomePage.prototype.copyFileToLocalDir3 = function (namePath, currentName, newFileName) {
        var _this = this;
        this.loading = this.loadingController.create({ content: " Saving ..." });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismissAll();
        }, 3000);
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage2 = newFileName;
            _this.storage.set('lastImage', _this.lastImage2);
            _this.loading.dismissAll();
        }, function (error) {
            _this.presentToast('Error while storing file.');
            _this.loading.dismissAll();
        });
    };
    HomePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    HomePage.prototype.optionsFnScheme = function () {
        this.schme = this.schme;
        this.Arraydata = this.schme;
        this.pid = this.Arraydata.id;
        this.district = this.Arraydata.district;
        this.project_name = this.Arraydata.project_name;
        // this.storage.set('pid', this.pid);
        // alert(this.pid)
        // alert(this.project_name)
    };
    HomePage.prototype.optionsFnWing = function () {
        this.selectedwings = this.selectedwings;
        this.WingArrayData = this.selectedwings;
        this.block_code = this.WingArrayData.block_code;
        // alert(this.block_code)
    };
    HomePage.prototype.optionsFnWorktype = function () {
        this.selecetdworkyype = this.selecetdworkyype;
        this.WorktypeArraydata = this.selecetdworkyype;
        this.work_code = this.WorktypeArraydata.work_code;
        // alert(this.work_code)
    };
    HomePage.prototype.fixed_location = function () {
        var _this = this;
        this.locationTracker.startTracking();
        this.loading = this.loadingController.create({ content: "Saving Location ..." });
        this.loading.present();
        this.storage.set("fixlat", this.locationTracker.lat);
        this.storage.set("fixlng", this.locationTracker.lng);
        this.storage.set("fixacc", this.locationTracker.acc);
        setTimeout(function () {
            _this.loading.dismissAll();
        }, 2000);
    };
    HomePage.prototype.saveimgfileinfoldwer = function (path) {
        var _this = this;
        this.storage.set('path11', path);
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
                .then(function () { return console.log("img  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
                .then(function () { return console.log(" img INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from tbl_image', []).then(function (data) {
                _this.storeimg = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.storeimg.push({ name: data.rows.item(i).name });
                    }
                    //alert(this.storeimg);
                    _this.storage.set('image', path);
                }
            }, function (err) {
                alert('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    HomePage.prototype.saveimgfileinfoldwer2 = function (path) {
        var _this = this;
        this.storage.set('path22', path);
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
                .then(function () { return console.log("img  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
                .then(function () { return console.log(" img INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from tbl_image', []).then(function (data) {
                _this.storeimg = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.storeimg.push({ name: data.rows.item(i).name });
                    }
                    alert(_this.storeimg);
                    _this.storage.set('image', path);
                }
            }, function (err) {
                alert('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    HomePage.prototype.saveimgfileinfoldwer3 = function (path) {
        var _this = this;
        this.storage.set('path33', path);
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
                .then(function () { return console.log("img  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
                .then(function () { return console.log(" img INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from tbl_image', []).then(function (data) {
                _this.storeimg = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.storeimg.push({ name: data.rows.item(i).name });
                    }
                    //alert(this.storeimg);
                    _this.storage.set('image', path);
                }
            }, function (err) {
                alert('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    HomePage.prototype.optionsFnStatus = function () {
        this.statusdata = this.status;
        if (this.statusdata == 'Completed') {
            this.showThis = true;
        }
        else {
            this.showThis = false;
        }
    };
    HomePage.prototype.optionsFnPercentage = function () {
        this.per = this.per;
    };
    HomePage.prototype.checkimagedata = function () {
        // if( this.lastImage==undefined){
        //   alert("Please Capture Image")
        // }else{
        //   this.storage.get('finalpath').then((data) =>{
        //   this.storefinalpathimage = data;
        //   this.sav();
        // });
        // }
        this.sav();
    };
    HomePage.prototype.sav = function () {
        var _this = this;
        this.storage.get('path').then(function (data) {
            var newpath = data;
            //alert("path"+newpath)
            var splitdata = [];
            var solitdata1 = [];
            splitdata = newpath.split('/storage/emulated/0/MSPHC/msphc_images');
            var second = splitdata[0];
            var third = splitdata[1];
            solitdata1 = third.split('.png');
            _this.fourth = solitdata1[0];
            //this.savenewimgfile(this.fourth);
            _this.storage.set('finalpath', _this.fourth);
        });
        this.storage.get('path1').then(function (data) {
            var newpath = data;
            //alert("path1"+newpath)
            var image1 = [];
            var image1_1 = [];
            image1 = newpath.split('/storage/emulated/0/MSPHC/msphc_images');
            var second = image1[0];
            var third = image1[1];
            image1_1 = third.split('.png');
            _this.image1 = image1_1[0];
            // this.savenewimgfile(this.fourth);
            // this.storage.set('image1', this.image1);
        });
        this.storage.get('path2').then(function (data) {
            var newpath = data;
            //alert("path2"+newpath)
            var image2 = [];
            var image2_1 = [];
            image2 = newpath.split('/storage/emulated/0/MSPHC/msphc_images');
            var second = image2[0];
            var third = image2[1];
            image2_1 = third.split('.png');
            _this.image2 = image2_1[0];
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
            .then(function (db) {
            _this.storage.get('finalpath').then(function (data) {
                // this.storage.get('image1').then((data) =>{
                //   this.image1=data
                //   alert("image1"+ this.image1)
                // });
                // this.storage.get('image2').then((data) =>{
                //   this.image2=data
                //  alert("image2"+ this.image2)
                // });
                if (_this.image1 == undefined) {
                    _this.sqlstoreimagename = _this.fourth;
                    // alert(" 1 image "+this.sqlstoreimagename)
                    _this.textnewFileName = _this.fourth + ".txt";
                    // alert(" 1  this.textnewFileName"+this.textnewFileName)
                }
                else if (_this.image2 == undefined) {
                    _this.sqlstoreimagename = _this.fourth + "," + _this.image1;
                    // alert(" 2 image "+this.sqlstoreimagename)
                    _this.textnewFileName = _this.fourth + "_" + _this.image1 + ".txt";
                    // alert(" 2  this.textnewFileName"+this.textnewFileName)
                }
                else {
                    _this.sqlstoreimagename = _this.fourth + "," + _this.image1 + "," + _this.image2;
                    // alert(this.sqlstoreimagename)
                    _this.textnewFileName = _this.fourth + "_" + _this.image1 + "_" + _this.image2 + ".txt";
                    // alert(" All this.textnewFileName"+this.textnewFileName)
                }
                // this.sqlstoreimagename = this.fourth+ "," +this.image1 +"," + this.image2;
                // alert("second"+this.sqlstoreimagename)
                _this.savenewimgfile(_this.sqlstoreimagename);
                // alert("writeToFile "+this.textnewFileName)
                _this.writeToFile(_this.sqlstoreimagename, _this.textnewFileName, _this.filecontentdata, _this.dirname);
                db.executeSql('CREATE TABLE IF NOT EXISTS mapping_data(id INTEGER PRIMARY KEY AUTOINCREMENT,name,lat,lang,accuracy,date,branch,office,district,unit,wl_type,wl_scheme,w_status,per,remark)', [])
                    .then(function () { return console.log("Query Executed"); })
                    .catch(function (e) { return console.log(e); });
                var imageName = _this.fourth;
                db.executeSql('INSERT INTO mapping_data(name,lat,lang,accuracy,date,branch,office,district,unit,wl_type,wl_scheme,w_status,doA,doI,doC,per,remark) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [_this.sqlstoreimagename, _this.locationTracker.lat.toFixed(6), _this.locationTracker.lng.toFixed(6), _this.locationTracker.acc.toFixed(6), finaldate, _this.branch, _this.office, _this.district, _this.district, _this.schemename, _this.schemename, _this.statusdata, _this.doa, _this.doi, _this.doc, "NA", _this.remark])
                    .then(function () { return console.log("Query Executed"); })
                    .catch(function (e) { return console.log(e); });
            });
            db.executeSql('select * from mapping_data', []).then(function (data) {
                _this.mapping_data = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.mapping_data.push({ name: data.rows.item(i).name, lat: data.rows.item(i).lat,
                            lang: data.rows.item(i).lang, accuracy: data.rows.item(i).accuracy, date: data.rows.item(i).date, branch: data.rows.item(i).branch, office: data.rows.item(i).office,
                            district: data.rows.item(i).district,
                            unit: data.rows.item(i).unit, wl_type: data.rows.item(i).wl_type, wl_scheme: data.rows.item(i).wl_scheme, w_status: data.rows.item(i).w_status, doA: data.rows.item(i).doA,
                            doI: data.rows.item(i).doI, doC: data.rows.item(i).doC, per: data.rows.item(i).per, remark: data.rows.item(i).remark });
                    }
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    HomePage.prototype.savenewimgfile = function (path) {
        var _this = this;
        //alert("StoreIn table    PID ---   >   "+this.pid)
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS tblnew_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name,pid)', [])
                .then(function () { return console.log("img  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO tblnew_image(name,pid) VALUES(?,?)', [path, _this.pid])
                .then(function () { return console.log(" img INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from tblnew_image', []).then(function (data) {
                _this.storenewimg = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.storenewimg.push({ name: data.rows.item(i).name });
                    }
                    _this.storage.set('image', path);
                }
            }, function (err) {
                alert('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    HomePage.prototype.GetSchememasterdata = function () {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('select * from tbl_scheme_master', []).then(function (data) {
                _this.scheme_master = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.scheme_master.push({ id: data.rows.item(i).id, wa_code: data.rows.item(i).wa_code, wat_code: data.rows.item(i).wat_code, wa_name: data.rows.item(i).wa_name });
                    }
                    console.log(_this.scheme_master);
                    //  this.storage.set("checkinsert",size);
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
            //   db.executeSql('select * from tbl_scheme_master', []).then((data) => {
            //     this.checkschemecount=data;
            //     alert("json"+JSON.stringify(data));
            //    alert("all count"+this.checkschemecount)
            // }, (err) => {
            //   console.log('Unable to execute sql: '+JSON.stringify(err));
            // });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    HomePage.prototype.saveSchemesMaster = function (wa_name, id, wa_code, wat_code, size) {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS tbl_scheme_master(id,wa_code,wat_code,wa_name)', [])
                .then(function () { return console.log("img  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO tbl_scheme_master(id,wa_code,wat_code,wa_name) VALUES(?,?,?,?)', [id, wa_code, wat_code, wa_name])
                .then(function () { return console.log(" img INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from tbl_scheme_master', []).then(function (data) {
                _this.scheme_master = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.scheme_master.push({ id: data.rows.item(i).id, wa_code: data.rows.item(i).wa_code, wat_code: data.rows.item(i).wat_code, wa_name: data.rows.item(i).wa_name });
                    }
                    console.log(_this.scheme_master);
                    _this.storage.set("checkinsert", size);
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    HomePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            // alert(img)
            //this.photos.push(img);
            // this.photos.reverse();
            return cordova.file.dataDirectory + img;
        }
    };
    HomePage.prototype.pathForImage2 = function (img2) {
        if (img2 === null) {
            return '';
        }
        else {
            // alert(img)
            //this.photos.push(img);
            // this.photos.reverse();
            return cordova.file.dataDirectory + img2;
        }
    };
    HomePage.prototype.pathForImage3 = function (img3) {
        if (img3 === null) {
            return '';
        }
        else {
            // alert(img)
            //this.photos.push(img);
            // this.photos.reverse();
            return cordova.file.dataDirectory + img3;
        }
    };
    HomePage.prototype.saveimgfile = function (path) {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
                .then(function () { return console.log("img  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
                .then(function () { return console.log(" img INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from tbl_image', []).then(function (data) {
                _this.storeimg = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.storeimg.push({ name: data.rows.item(i).name });
                    }
                    _this.storage.set('image', path);
                }
            }, function (err) {
                alert('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    HomePage.prototype.registration = function () {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('select * from registration', []).then(function (data) {
                _this.user_data = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.user_data.push({
                            official_name: data.rows.item(i).official_name,
                            mob_no: data.rows.item(i).mob_no,
                            pmc: data.rows.item(i).pmc,
                            contractor: data.rows.item(i).contractor,
                            resion: data.rows.item(i).resion,
                            email: data.rows.item(i).email
                        });
                        _this.username = data.rows.item(i).official_name;
                        _this.contactno = data.rows.item(i).mob_no;
                        _this.pmc_name = data.rows.item(i).pmc;
                        _this.contractor = data.rows.item(i).contractor;
                        _this.resion = data.rows.item(i).resion;
                        _this.useremail = data.rows.item(i).email;
                        _this.getprojectList(_this.pmc_name, _this.contractor);
                        //alert(this.username)
                    }
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    HomePage.prototype.writeToFile = function (filesnames, filename, filecontents, dirname) {
        var _this = this;
        //alert("writetofile" +filename);
        this.imagebycommaseperated = filesnames.split(',');
        if (filesnames != undefined) {
            this.imagebycomma_1 = filesnames.split(',');
            // alert("array1"+this.imagebycomma_1);
        }
        if (this.imagebycomma_1[1] == undefined && this.imagebycomma_1[2] == undefined) {
            this.imagenames = this.imagebycomma_1[0];
        }
        else if (this.imagebycomma_1[1] == undefined) {
            this.imagenames = this.imagebycomma_1[0];
        }
        else if (this.imagebycomma_1[2] == undefined) {
            this.imagenames = this.imagebycomma_1[0] + "," + this.imagebycomma_1[1];
        }
        else {
            this.imagenames = this.imagebycomma_1[0] + "," + this.imagebycomma_1[1] + "," + this.imagebycomma_1[2];
        }
        this.filename = filename;
        this.dirname = dirname;
        var result = this.file.createDir(this.file.externalRootDirectory, this.dirname, true);
        result.then(function (data) {
            _this.dirPath = data.toURL();
            _this.uploadpath = _this.dirPath + filename;
            if (_this.remark == undefined) {
                _this.remark = 'NA';
            }
            if (_this.doc == undefined) {
                _this.doc = 'NA';
            }
            if (_this.doi == undefined) {
                _this.doi = 'NA';
            }
            if (_this.doa == undefined) {
                _this.doa = 'NA';
            }
            _this.filecontentdata =
                btoa(_this.project_name) + "," + btoa(_this.pid) + "," + btoa(_this.statusdata) + "," + btoa("NA") + "," + btoa(_this.locationTracker.lat.toFixed(4)) + "," + btoa(_this.locationTracker.lng.toFixed(4)) + "," + btoa(_this.locationTracker.acc.toFixed(4)) + "," + btoa(finaldate) + "," + btoa(_this.username) + "," + btoa(_this.contactno) + "," + btoa(_this.useremail) + "," + btoa(_this.device.uuid) + "," + btoa(_this.remark) + "," + btoa("1.0") + "," + btoa(_this.imagenames) + "," + btoa(_this.resion) + "," + btoa(_this.pmc_name) + "," + btoa(_this.contractor);
            //this. filecontentdata= this.branch + "," +this.level0+ ","+this.level1+ "," +this.level2+ "," +this.level3+ "," +this.wat_code+ ","+ this.statusdata+ ","+this.wa_code+  ","+this.doa+ ","+this.doi+ ","+this.doc+ "," +this.per+","+this.locationTracker.lat.toFixed(4)+ ","+this.locationTracker.lng.toFixed(4)+ ","+this.locationTracker.acc.toFixed(4)+ ","+finaldate+ ","+this.sender_name+ ","+this.mob_no+ ","+this.designation+ ","+this.emailaddress+","+this.device.uuid+","+this.remark+","+"1.0"+","+this.fourth;
            _this.file.writeFile(data.toURL(), _this.filename, _this.filecontentdata, { replace: true });
            _this.storage.remove("path11");
            _this.storage.remove("path22");
            _this.storage.remove("path33");
            _this.savetextfile();
        }).catch(function (error) {
            alert("error  " + error);
        });
    };
    HomePage.prototype.savetextfile = function () {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS textfile(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
                .then(function () { return console.log("TXT Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO textfile(name) VALUES(?)', [_this.uploadpath])
                .then(function () { return console.log("TXT INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from textfile', []).then(function (data) {
                _this.storetext = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.storetext.push({ name: data.rows.item(i).name });
                    }
                    //this.DataSavedToast();
                    //  this.storage.remove('path1');
                    //  this.storage.remove('path2');
                    //  this.storage.remove('finalpath');
                    _this.showAlert();
                    //  this.navCtrl.pop();
                    //  this.navCtrl.push(HomePage);
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
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
    HomePage.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Data saved Successfully',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.storage.remove('path');
                        _this.storage.remove('path1');
                        _this.storage.remove('path2');
                        _this.storage.remove('fixlat');
                        _this.storage.remove('fixlng');
                        _this.storage.remove('fixacc');
                        _this.navCtrl.pop({ animate: false });
                        _this.navCtrl.push(HomePage_1);
                    }
                }
            ],
        });
        alert.present();
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar background-color="#057989" hideBackButton="true" scroll="false">\n    <ion-buttons left>\n      <img height="35" src="assets/imgs/police_logo.png" />\n    </ion-buttons>\n    <ion-title >\n      <label text-center style="font-size: 16px; font-family: arial; text-align: center;font-weight: bold"> Maharashtra State Police  Housing Corporation </label>\n    </ion-title>\n    <ion-buttons right>\n      <img height="35" src="assets/imgs/mrsac_logo.png" />\n    </ion-buttons>\n</ion-navbar >\n  </ion-header>\n<ion-content  class=bg-style>\n  <ion-card style="border:solid 1px #057989">\n    <ion-row style="background-color: #057989; color:#FFF;margin: 5px;font-weight: bold">\n      <ion-col style="text-align:left" > Officer Details </ion-col>\n      </ion-row>\n      \n    <ion-card-content margin-top=20px>\n      <div class="modal" ion-item text-wrap *ngFor="let item of user_data" style="background: #eee;border: 1px solid #888">\n\n          <div class="item item-text-wrap" style="font-size:100%; margin-bottom:5px;padding: 2%">\n              <strong> Officer Name      : </strong>  {{ item.official_name }}\n           </div>\n           <div class="item item-text-wrap" style="font-size:100%; margin-bottom:5px;padding: 2%">\n                <strong> PMC Name      : </strong>  {{ item.pmc }}\n             </div>\n\n             <div class="item item-text-wrap" style="font-size:100%; margin-bottom:5px;padding: 2%">\n              <strong> Contractor Name      : </strong>  {{ item.contractor }}\n           </div>\n\n           <div class="item item-text-wrap" style="font-size:100%; margin-bottom:5px;padding: 2%">\n            <strong> Mobile no      : </strong>  {{ item.mob_no }}\n         </div>\n           </div>\n           </ion-card-content>\n           </ion-card>\n<ion-card>\n  <ion-row style="background-color: #057989; color:#FFF;margin: 5px;font-weight: bold">\n    <ion-col style="text-align:left" > Mapping </ion-col>\n    </ion-row>\n\n     <!-- <ion-item>\n        <ion-label style="color: rgb(131, 129, 129);text-align: start;font-size: 13px">Department</ion-label>\n        <ion-label style="color: black;text-align: end;">{{this.branch}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n          <ion-label style="color: rgb(131, 129, 129);text-align: start;font-size: 13px">{{this.officesname}} </ion-label>\n          <ion-label style="color: black;text-align: end">{{this.office_name}} </ion-label>\n      </ion-item>\n\n      <ion-item  *ngIf="showThiss">\n          <ion-label style="color: rgb(131, 129, 129);text-align: start;font-size: 13px">Office</ion-label>\n          <ion-label style="color: black;text-align: end">{{this.range_office_name}}</ion-label>\n        </ion-item> -->\n\n   \n        <ion-item>\n          <ion-label style="color: rgb(131, 129, 129);text-align: start;font-size: 13px">Select Ongoing Project </ion-label>\n          <ion-select [(ngModel)]="schme" style="font-size: 17px" (ionChange)="optionsFnScheme()">\n              <ion-option *ngFor="let s of projectList"  [value]="{id:s.pid,district:s.district,project_name:s.project_name}">{{s.project_name }}</ion-option> \n          </ion-select>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label style="color: rgb(131, 129, 129);text-align: start;font-size: 13px">Select Wing </ion-label>\n          <ion-select [(ngModel)]="selectedwings" style="font-size: 17px" (ionChange)="optionsFnWing()">\n              <ion-option *ngFor="let s of Wings"  [value]="{id:s.id,block_code:s.block_code}">{{s.block_name }}</ion-option> \n          </ion-select>\n        </ion-item> -->\n\n        <!-- <ion-item>\n          <ion-label style="color: rgb(131, 129, 129);text-align: start;font-size: 13px">Select Work type </ion-label>\n          <ion-select [(ngModel)]="selecetdworkyype" style="font-size: 17px" (ionChange)="optionsFnWorktype()">\n              <ion-option *ngFor="let s of Work_Type"  [value]="{id:s.id,work_code:s.work_code}">{{s.work_type }}</ion-option> \n          </ion-select>\n        </ion-item> -->\n\n        <ion-item>\n          <ion-label style="color: rgb(131, 129, 129);text-align: start;font-size: 13px">Select Current Work Status</ion-label>\n          <ion-select   [(ngModel)]="status"  name="status"   (ionChange)="optionsFnStatus()"  >\n              <ion-option value="Admin">Administrator Building</ion-option>\n              <ion-option value="Residential">Residential Building</ion-option>\n         </ion-select>\n          </ion-item> \n           <!-- <ion-item>\n              <ion-label stacked color="primary"> Select Date of Approval</ion-label>\n              <ion-input type="date" displayFormat="DD-MM-YYYY"  [(ngModel)]="doa"  placeholder="Select Date" value={{date}} required="required"></ion-input>\n            </ion-item>\n    \n          <ion-item>\n            <ion-label stacked color="primary"> Select Date of Initiation</ion-label>\n            <ion-input type="date"  displayFormat="DD-MM-YYYY" [(ngModel)]="doi" placeholder="Select Date" value={{date}}  required="required"></ion-input>\n          </ion-item>\n    \n        <ion-item *ngIf="showThis">\n          <ion-label stacked color="primary"> Select Date of Completion</ion-label>\n          <ion-input type="date"  [(ngModel)]="doc" placeholder="Enter Date" value={{date}} required="required"></ion-input>\n        </ion-item>  -->\n\n                  <!-- <ion-item>\n                    <ion-label  style="color: rgb(131, 129, 129);text-align: start;font-size: 13px">Percentage of  Work Completion</ion-label>\n                    <ion-select [(ngModel)]="per" (ionChange)="optionsFnPercentage()">\n                        <ion-option value="25%">25%</ion-option>\n                        <ion-option value="50%">50%</ion-option>\n                        <ion-option value="75%">75%</ion-option>\n                        <ion-option value="100%">100%</ion-option>\n                     </ion-select>\n                  </ion-item> -->\n                </ion-card>\n             \n        <ion-card > \n                <ion-grid>\n                        <ion-row style="background-color: #057989; color:#FFF;font-weight: bold;margin: 3px">\n                                <button  color="secondary" ion-button block    style="margin: 5px;text-transform: none"   (click)="refresh_location()" >Refresh Location</button>\n                        </ion-row>\n                  </ion-grid>   \n                  \n                  <table  style="margin-top:1%" >\n                    <tr>\n                      <td>Latitude</td>\n                      <td> {{ this.locationTracker.lat.toFixed(4) }} </td>\n                    </tr>\n                    <tr>\n                      <td>Longitude</td>\n                      <td>{{ locationTracker.lng.toFixed(4) }} </td>\n                    </tr>\n                    <tr>\n                      <td>Accuracy</td>\n                      <td> {{locationTracker.acc.toFixed(4) }} </td>\n                    </tr>\n                    <tr>\n                      <td>Date of Mapping</td>\n                      <td> {{  currentDate }} </td>\n                    </tr>\n                  </table>\n          </ion-card>\n                  <ion-card>\n                      <ion-grid >\n                          <ion-row style="background-color: #057989; color:#FFF;margin: 5px;font-weight: bold">\n                                 <ion-col style="text-align:left"> Capture Photo </ion-col>\n                               </ion-row>\n                               <label text-center style="font-size: 12px;  text-align: center;font-weight: bold"> Click on Camera button to take photo</label>\n                               </ion-grid>\n\n\n                               <ion-row style="background: #FFF">\n                                  <ion-col col-md-6 >\n                                      <ion-card class="block" *ngFor="let item of ditems">\n                                          <img   src="{{this.var_picture}}"   \n                                          text="{{\'Mapping-Date :   \' + this.currentDate + \'       LAT: \' + this.locationTracker.lat.toFixed(2)  + \'   LON: \'+ this.locationTracker.lng.toFixed(2) +\'    DEVICE_ID : \' + item.value}}"  texts="{{  item.value +\'_\'+this.timestamp + \'      \'+\' Official Name :   \'+this.username+\'  \'+\' PID :\'+this.pid+\' \'+\'  SSS-MSPHC\'}}"    image-draw-text  crossOrigin  style="background-repeat:no-repeat; background-position:center center;" >\n                                          \n                                        <button ion-button  style="text-transform: none;background: #057989;" ion-center (click)="captureimage()">\n                                              <div style="text-align: center">\n                                                  <ion-icon name="camera"></ion-icon>\n                                                  <label   style="font-size: 16px;text-transform: none;background: #057989;">   Capture Photo </label>\n                                              </div>\n                                            </button>\n                                        </ion-card>\n                                  </ion-col>\n                                  <ion-col col-md-6>\n                                      <ion-card class="block" *ngFor="let item of ditems">\n                                          <img   src="{{this.var_picture1}}"   \n                                          text="{{\'Mapping-Date :   \' + this.currentDate + \'         LAT: \' + this.locationTracker.lat.toFixed(2)  + \'   LON: \'+ this.locationTracker.lng.toFixed(2) +\'    DEVICE_ID : \' + item.value}}"  texts="{{  item.value +\'_\'+this.timestamp + \'      \'+\' Official Name :  \'+this.username+\'  \'+\' PID :\'+this.pid+\' \'+\'  SSS-MSPHC\'}}"    image-draw-text-directive2  crossOrigin  style="background-repeat:no-repeat; background-position:center center;" >\n                                          <button ion-button  style="text-transform: none;background: #057989;" ion-center (click)="captureimage1()">\n                                              <div>\n                                                  <ion-icon name="camera"></ion-icon>\n                                                  <label   style="font-size: 16px;text-transform: none;background: #057989;">   Capture Photo2 </label>\n                                              </div>\n                                            </button>\n                                        \n                                        </ion-card>\n                                  </ion-col>\n                                  \n                                </ion-row>\n\n\n                                <ion-row style="background: #FFF ; display: flex;justify-content: center;">\n                                    <ion-col col-md-6>\n                                        <ion-card class="block" *ngFor="let item of ditems">\n                                            <img   src="{{this.var_picture2}}"   \n                                            text="{{\'Mapping-Date :   \' + this.currentDate + \'        LAT: \' + this.locationTracker.lat.toFixed(2)  + \'   LON: \'+ this.locationTracker.lng.toFixed(2) +\'    DEVICE_ID : \' + item.value}}"  texts="{{  item.value +\'_\'+this.timestamp + \'      \'+\' Official Name :   \'+this.username+\'  \'+\' PID :\'+this.pid+\' \'+\'  SSS-MSPHC\'}}"    image-draw-text3  crossOrigin  style="background-repeat:no-repeat; background-position:center center;" >\n                                            <button ion-button  style="text-transform: none;background: #057989;" ion-center (click)="captureimage2()">\n                                                <div>\n                                                    <ion-icon name="camera"></ion-icon>\n                                                    <label   style="font-size: 16px;text-transform: none;background: #057989;">   Capture Photo3 </label>\n                                                </div>\n                                              </button>\n                                          \n                                          </ion-card>\n                                    </ion-col>\n                                  </ion-row>\n                                  <div class="wrapper" margin-top=20px>\n                                    <button ion-button color="secondary"  style="text-transform: none;background: #057989;" (click)="checkimagedata()" > Save </button>\n                                      \n                                </div>\n\n                                <div class="login-box" style="padding:3px">\n                                  <!-- value="{{remark}}" -->\n                                  <ion-input type="text"   class="mytext" [(ngModel)]="remark"  placeholder="Remark" ></ion-input>         \n                                </div>\n                    </ion-card>\n                  </ion-content>\n\n\n\n                  '/*ion-inline-end:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_19__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_urlsetup_urlsetup__["a" /* UrlsetupProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//SELECT department,level0,level1,level2,level3,wat_code,work_id,work_status1,work_status2,work_status3,wa_code,approval_date,initiation_date,completion_date,per_completion1,per_completion2,per_completion3,lat,lng,accuracy1,accuracy2,accuracy3,date,date1,date2,date3,sendername1,sendername2,sendername3,mobilenumber1,mobilenumber2,mobilenumber3,designation1,designation2,designation3,emailaddress1,emailaddress2,emailaddress3,imei_code1,imei_code2,imei_code3,remarks1,remarks2,remarks3,version,file_name1,file_name2,file_name3 from mapping_data WHERE level0='DG_HQ' and level1='RGCM03' and level2='RGCM03' and level3='RGCM03' and wa_code='SER02' and work_id='000CPO_THA_RGCM03SER0205'
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_urlsetup_urlsetup__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Storage } from '@ionic/storage';



var CreateEmailPage = /** @class */ (function () {
    // Server_url="http://43.241.63.17:8080/MSPHC-API/noauth"
    function CreateEmailPage(datepipe, navCtrl, navParams, builder, http, fb, loadingCtrl, loadingController, toastCtrl, _state, sqlite) {
        this.datepipe = datepipe;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this._state = _state;
        this.sqlite = sqlite;
        this.createForm2 = null;
        this.CityRanges = [];
        this.branches = [];
        this.CityRangesoriginal = [];
        this.District = [];
        this.Arraydata = [];
        this.ArrayDistrcitdata = [];
        this.user_data = [];
        this.usercretd = 'created';
        this.usercreated = [];
        this.skip = 'sucessfullogin';
        this.ArrayBranch = [];
        this.regionData = [];
        this.loginkey = 'sucessfullogin';
        this.Server_url = "http://m2.mrsac.org.in:8080/MSPHC-API/noauth";
        this.data = {};
        this.data.fullname = '';
        this.data.email = '';
        this.data.password = '';
        this.data.cpassword = '';
        this.data.address = '';
        this.data.contact = '';
        this.data.pincode = '';
        this.data.response = '';
        this.data.branch = '';
        this.data.rank = '';
        this.data.district = '';
        this.data.SevarthID = '';
        // this.http = http;
        this.createForm2 = builder.group({
            'mailId': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'contact': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)])],
            'pincode': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(6)])],
            'fullname': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'officename': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'SevarthID': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'areacode': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'telphone': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'branch': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'rank': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])],
            'district': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)])]
        });
        console.log(' this.mailId', this.mailId);
        this.getbranchs();
        this.getranks();
        this.getRegions();
        this.office = "Office";
        this.date = new Date().toISOString();
        var newdatedata = this.date = new Date();
        this.latest_date = this.datepipe.transform(newdatedata, 'yyyy-MM-dd HH:mm:ss');
    }
    CreateEmailPage.prototype.getbranchs = function () {
        var _this = this;
        this.loading = this.loadingController.create({});
        this.loading.present();
        this._state.loadPMC_LST().subscribe(function (res) {
            _this.branches = res.PMC;
            _this.loading.dismissAll();
            console.log(res);
        });
    };
    CreateEmailPage.prototype.getranks = function () {
        var _this = this;
        this.loading = this.loadingController.create({});
        this.loading.present();
        this._state.loadContractorList().subscribe(function (res) {
            _this.CityRanges = res.Contractor;
            _this.loading.dismissAll();
            console.log(res);
        });
    };
    CreateEmailPage.prototype.getRegions = function () {
        var _this = this;
        this.loading = this.loadingController.create({});
        this.loading.present();
        this._state.loadRegions().subscribe(function (res) {
            _this.regionData = res.Region;
            _this.loading.dismissAll();
            console.log(res);
        });
    };
    CreateEmailPage.prototype.optionsFn = function () {
        this.Arraydata = this.city;
        this.level1data = this.Arraydata.level1;
        this.level0data = this.Arraydata.level0;
        this.level2data = this.Arraydata.level2;
        this.level3data = this.Arraydata.level3;
        this.ps_name = this.Arraydata.ps_name;
        console.log(this.Arraydata);
        var citycode = this.city;
        //this.loadCityranges(this.level1data);
    };
    CreateEmailPage.prototype.optionsrank = function () {
        this.rankdata = this.rank;
        //alert(this.rank)
    };
    CreateEmailPage.prototype.selectsregion = function () {
        this.regionnmae = this.regionnmae;
        //alert(this.regionnmae);
    };
    CreateEmailPage.prototype.getBranchData = function () {
        this.branchdata = this.pmc;
    };
    CreateEmailPage.prototype.signup = function () {
        if (this.branchdata == undefined || this.ps_name == undefined || this.rankdata == undefined) {
            alert("Please fill all details");
        }
        else {
            //this.doLogins();
        }
    };
    CreateEmailPage.prototype.registrtion = function () {
        var _this = this;
        var officenmae = this.data.office;
        var email = this.mailId;
        var mobileno = this.data.contact;
        var SevarthID = this.data.SevarthID;
        var password = this.data.password;
        // alert(officenmae)
        // alert(email)
        // alert(mobileno)
        // alert(password)
        this.loading = this.loadingCtrl.create({ content: "Registering ..." });
        this.loading.present();
        // var url = 'http://mrsac.maharashtra.gov.in/MobilePhp/insertpis.php';
        //var url = "http://192.168.64.2:8080/insertpis.php";
        var url = 'http://43.241.63.17:8080/MSPHC-API/api/auth/signup';
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // let body =  "officialname=" +officenmae + "&email=" + email + "&contact_no=" + mobileno   + 
        // "&designation=" + this.rankdata +
        // "&branch=" + this.brach_name +"&level0=" + this.level0data 
        // +"&level1=" + this.level1data +"&level2="+this.level2data +
        //  "&level3="+this.level3data+"&sevarthID="+SevarthID+"&password="+password+
        // "&created_date="+this.latest_date + "&updated_date="+this.latest_date;
        var data = JSON.stringify({ name: officenmae, pmc_name: this.branchdata, email: email, password: password, contractor_name: this.rankdata, region: this.regionnmae, username: mobileno });
        // alert("this.districtData  "  + this.districtData)
        //alert("this.ps_name  "  + data)
        // this.otpsend(mobileno,officenmae,email,this.rankdata,this.data.SevarthID,this.brach_name,this.ps_name,this.districtData,this.level0data,this.level1data,this.level2data,this.level3data,this.latest_date,password);
        return new Promise(function (resolve) {
            _this.http.post(url, data, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                var status = data.success;
                var messege = data.message;
                if (status == true) {
                    _this.loading.dismissAll();
                    alert(messege);
                    // this.branchdata  --------------- > PMC NAME
                    // this.rankdtaa  --------------- > Contactor NAME
                    _this.registration(officenmae, email, password, mobileno, _this.branchdata, _this.rankdata, _this.regionnmae);
                }
                else {
                    _this.loading.dismissAll();
                    alert(messege);
                }
            }, function (err) {
                alert("err" + err);
                _this.loading.dismissAll();
            });
        });
    };
    CreateEmailPage.prototype.registration = function (name, useremail, password, mobileno1, pmc, contractor, region) {
        var _this = this;
        //alert("data")
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('Drop TABLE registration', []);
            db.executeSql('CREATE TABLE IF NOT EXISTS registration(id INTEGER PRIMARY KEY AUTOINCREMENT, official_name ,mob_no, pmc, email, contractor,resion)', [])
                .then(function () { return console.log("CEATE Query Executed"); })
                .catch(function (e) { return alert(e); });
            var officenmae = _this.data.office;
            var email = _this.mailId;
            var mobileno = _this.data.contact;
            var password = _this.data.password;
            db.executeSql('INSERT INTO registration(official_name ,mob_no, pmc, email, contractor,resion) VALUES(?,?,?,?,?,?)', [name, mobileno1, pmc, useremail, contractor, region])
                .then(function () { return console.log("INSERT Query Executed"); })
                .catch(function (e) { return alert(e); });
            db.executeSql('select * from registration', []).then(function (data) {
                _this.user_data = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        // alert("INSERTING........................")
                        _this.user_data.push({
                            official_name: data.rows.item(i).official_name,
                            mob_no: data.rows.item(i).mob_no,
                            pmc: data.rows.item(i).pmc,
                            contractor: data.rows.item(i).contractor,
                            resion: data.rows.item(i).resion,
                            email: data.rows.item(i).email
                        });
                        var name = data.rows.item(i).official_name;
                        // alert(name)
                        //alert("INSERTING DONE........................")
                    }
                }
                //this.storage.set('login', this.loginkey);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
            }, function (err) {
                alert('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
        // alert(this.username);
    };
    CreateEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-email',template:/*ion-inline-start:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/create-email/create-email.html"*/'<!--\n  Generated template for the CreateEmail page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar background-color="#057989" hideBackButton="false" scroll="false">\n    <ion-buttons left>\n      <img height="35" src="assets/imgs/police_logo.png" />\n    </ion-buttons>\n    <ion-title style="text-align: center">\n      <label text-center style="font-size: 16px; font-family: arial; text-align: center;font-weight: bold"> Maharashtra State Police  Housing Corporation </label>\n    </ion-title>\n    <ion-buttons right>\n      <img height="35" src="assets/imgs/mrsac_logo.png" />\n    </ion-buttons>\n\n  </ion-navbar >\n  <ion-navbar  hideBackButton="true" scroll="false" style="margin-top: 0.5px  ;text-align:left" class="toolbar-title">\n     \n      <ion-title style="text-align:left" class="ion-title">\n        <label  style="font-size: 14px; font-family: arial; text-align:left;font-weight: bold">Registration</label>\n      </ion-title>\n     \n  \n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="login-content" >\n\n\n      <ion-item>\n        <ion-label style="color: black"> Select Project Management Consultant Name  </ion-label>\n\n           <ion-select   [(ngModel)]="pmc"  name="pmc"   (ionChange)="getBranchData()" >\n            <ion-option    *ngFor="let s of branches"    >{{s.project_management_consultant}}</ion-option>\n             </ion-select>\n      </ion-item>\n\n      \n        \n      <ion-item>\n        <ion-label style="color: black">Contractor Name</ion-label>\n        <ion-select   [(ngModel)]="rank"  name="rank" (ionChange)="optionsrank()">\n            <ion-option *ngFor="let s of CityRanges"  value="{{s.contractor}}">{{s.contractor }}</ion-option>\n          </ion-select>\n      </ion-item>\n\n      \n\n      <ion-item>\n        <ion-label style="color: black"> Select Region</ion-label>\n\n           <ion-select   [(ngModel)]="regionnmae"  name="regionnmae"  (ionChange)="selectsregion()"   >\n            <ion-option    *ngFor="let s of regionData"    >{{s.resion}}</ion-option>\n             </ion-select>\n      </ion-item>\n\n        \n  \n  <div class="login-box">\n<form [formGroup]="createForm2"  novalidate>\n\n\n  \n\n    <ion-item>\n      <!-- <ion-label floating>Office Name</ion-label> -->\n      \n      <ion-input type="text"  placeholder="Full Name" [formControl]="createForm2.controls[\'officename\']" [ngClass]="{\'error-border\':!createForm2.controls[\'officename\'].valid}"  name="officename" [(ngModel)]="data.office" minlength="1"></ion-input>\n      <ion-icon name="briefcase" item-right ></ion-icon>\n    </ion-item>\n\n   \n\n   \n\n    <ion-item>\n        <ion-input type="text" formControlName="mailId"  placeholder="you@example.com" name="mailId" [(ngModel)]="mailId" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" required></ion-input>\n        <ion-icon name="mail" item-right ></ion-icon>\n      </ion-item>\n              <p [hidden]="createForm2.controls.mailId.valid || createForm2.controls.mailId.pristine " class="error-box" padding-left>please enter valid email Id</p>\n\n              <ion-item>\n                \n                  <ion-input type="password" placeholder="Password" [formControl]="createForm2.controls[\'password\']" [ngClass]="{\'error-border\':!createForm2.controls[\'password\'].valid}" name="password" [(ngModel)]="data.password" minlength="6"></ion-input>\n                  <ion-icon name="eye" item-right ></ion-icon>\n                </ion-item>\n                <p [hidden]="createForm2.controls.password.valid || createForm2.controls.password.pristine " class="error-box" padding-left>please enter valid length password</p>\n<ion-item>\n<ion-input type="tel"  [formControl]="createForm2.controls[\'contact\']"  placeholder=" +91  Phone number" [ngClass]="{\'error-border\':!createForm2.controls[\'contact\'].valid}"  name="contact" [(ngModel)]="data.contact" maxlength="10" ></ion-input>\n<ion-icon name="phone-portrait" item-right ></ion-icon>\n</ion-item>\n\n\n<button  ion-button block  style="background: #057989 ;text-transform: none" [disabled]="!createForm2.controls.mailId.valid || !createForm2.controls[\'contact\'].valid\n||!createForm2.controls[\'officename\'].valid   " (click)="registrtion()" >\n        Sign Up</button>\n\n      \n      \n</form>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/create-email/create-email.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_urlsetup_urlsetup__["a" /* UrlsetupProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */]])
    ], CreateEmailPage);
    return CreateEmailPage;
}());

//# sourceMappingURL=create-email.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(375);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_create_email_create_email__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_urlsetup_urlsetup__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_location_tracker_location_tracker__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_background_geolocation__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_location_accuracy__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_base64_to_gallery__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_base64__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_device__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_image_draw_text_image_draw_text__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_image_draw_text_directive2_image_draw_text_directive2__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_image_draw_text3_image_draw_text3__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_sendmanager_sendmanager__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_send_send__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_unsend_unsend__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_profile_profile__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_forgotpassword_forgotpassword__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { ConnectionPage } from '../pages/connection/connection';


//import { Storage } from '@ionic/storage';
//import { IonicStorageModule } from '@ionic/storage';


// import { Network } from '@ionic-native/network';
//import { NetworkConnectionProvider } from '../providers/network-connection/network-connection';




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_email_create_email__["a" /* CreateEmailPage */], __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_27__directives_image_draw_text_image_draw_text__["a" /* ImageDrawTextDirective */], __WEBPACK_IMPORTED_MODULE_28__directives_image_draw_text_directive2_image_draw_text_directive2__["a" /* ImageDrawTextDirective2Directive */], __WEBPACK_IMPORTED_MODULE_29__directives_image_draw_text3_image_draw_text3__["a" /* ImageDrawText3Directive */], __WEBPACK_IMPORTED_MODULE_30__pages_sendmanager_sendmanager__["a" /* SendmanagerPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_send_send__["a" /* SendPage */], __WEBPACK_IMPORTED_MODULE_32__pages_unsend_unsend__["a" /* UnsendPage */], __WEBPACK_IMPORTED_MODULE_33__pages_profile_profile__["a" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_34__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/send/send.module#SendPageModule', name: 'SendPage', segment: 'send', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sendmanager/sendmanager.module#SendmanagerPageModule', name: 'SendmanagerPage', segment: 'sendmanager', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unsend/unsend.module#UnsendPageModule', name: 'UnsendPage', segment: 'unsend', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_email_create_email__["a" /* CreateEmailPage */], __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */], __WEBPACK_IMPORTED_MODULE_30__pages_sendmanager_sendmanager__["a" /* SendmanagerPage */], __WEBPACK_IMPORTED_MODULE_31__pages_send_send__["a" /* SendPage */], __WEBPACK_IMPORTED_MODULE_32__pages_unsend_unsend__["a" /* UnsendPage */], __WEBPACK_IMPORTED_MODULE_30__pages_sendmanager_sendmanager__["a" /* SendmanagerPage */], __WEBPACK_IMPORTED_MODULE_33__pages_profile_profile__["a" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_34__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_23__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_14__providers_urlsetup_urlsetup__["a" /* UrlsetupProvider */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */],
                __WEBPACK_IMPORTED_MODULE_14__providers_urlsetup_urlsetup__["a" /* UrlsetupProvider */], __WEBPACK_IMPORTED_MODULE_16__angular_common__["d" /* DatePipe */],
                Storage, __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sendmanager_sendmanager__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_location_tracker_location_tracker__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_location_accuracy__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_urlsetup_urlsetup__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var lat1, lng1, acc, date;
var result;
var DashboardPage = /** @class */ (function () {
    function DashboardPage(sqlite, _state, alertCtrl, file, locationTracker, locationAccuracy, storage, navCtrl, network, navParams, alert, platform, eventCtrl, toastCtrl) {
        var _this = this;
        this.sqlite = sqlite;
        this._state = _state;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.locationTracker = locationTracker;
        this.locationAccuracy = locationAccuracy;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.network = network;
        this.navParams = navParams;
        this.alert = alert;
        this.platform = platform;
        this.eventCtrl = eventCtrl;
        this.toastCtrl = toastCtrl;
        this.hide = true;
        this.skip = 'sucessfullogin';
        this.scheme_master = [];
        this.DateList = [];
        result = this.file.createDir(this.file.externalRootDirectory, "MSPHC", false);
        // this.storage.get('sucessfullogin').then((data) =>{
        //   var skipmessage=data;
        //  if( this.skip != skipmessage){
        //   this.navCtrl.push(CreateEmailPage);
        // }
        // });
        var disconnectSubscription = network.onDisconnect().subscribe(function () {
            console.log('network was disconnected');
            var toast = _this.toastCtrl.create({
                message: 'Network was disconnected',
                duration: 3000,
                showCloseButton: true,
                cssClass: "changeToastfaillure",
            });
            toast.present();
        });
        // watch network for a connection
        var connectSubscription = network.onConnect().subscribe(function () {
            console.log('network connected');
            // if (Network.type === 'wifi') {
            console.log('we got a wifi connection, woohoo!');
            var toast = _this.toastCtrl.create({
                message: 'Network connected',
                duration: 3000,
                showCloseButton: true,
                cssClass: "changeToastsuccess",
            });
            toast.present();
            // }
        });
        //this.getWelfateSchme();
    }
    // getWelfateSchme() {
    //   this._state.loadWelfateAcivityType().subscribe(res => {
    //      this.DateList = res.scheme;
    //        console.log(this.DateList);
    //       //alert(this.DateList.length)
    //       this.storage.set("scheme_length",this.DateList.length);
    //    });
    //  }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
        result = this.file.createDir(this.file.externalRootDirectory, "MSPHC", false);
        this.enableLocation();
        //this.back();
    };
    DashboardPage.prototype.ionViewDidEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    DashboardPage.prototype.ionViewWillLeave = function () {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    DashboardPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.customHandleBackButton();
        }, 10);
    };
    DashboardPage.prototype.customHandleBackButton = function () {
        this.exit();
    };
    // getWelfateSchme() {
    //   this._state.loadWelfateAcivityType().subscribe(res => {
    //      this.DateList = res.scheme;
    //          this.storage.get('checkinsert').then((data) =>{
    //            this.checkschemecount = data;
    //            if( this.checkschemecount==this.DateList.length){
    //             this.GetSchememasterdata();
    //            }else{
    //              for (let name of this.DateList) {
    //                var wa_name=name.wa_name;
    //                var id=name.id;
    //                var wa_code= name.wa_code;
    //                var wat_code=name.wat_code;
    //                var sizeofarray=this.DateList.length;
    //              this.saveSchemesMaster(wa_name,id,wa_code,wat_code,sizeofarray)
    //              }
    //            }
    //            });
    //    });
    //  }
    DashboardPage.prototype.GetSchememasterdata = function () {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('select * from tbl_scheme_master', []).then(function (data) {
                _this.scheme_master = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.scheme_master.push({ id: data.rows.item(i).id, wa_code: data.rows.item(i).wa_code, wat_code: data.rows.item(i).wat_code, wa_name: data.rows.item(i).wa_name });
                    }
                    console.log(_this.scheme_master);
                    //  this.storage.set("checkinsert",size);
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
            //   db.executeSql('select * from tbl_scheme_master',[]).then((data) => {
            //     this.checkschemecount=data;
            //     alert("json"+JSON.stringify(data));
            //    alert("all count"+this.checkschemecount)
            // }, (err) => {
            //   console.log('Unable to execute sql: '+JSON.stringify(err));
            // });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    DashboardPage.prototype.enableLocation = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                    _this.start();
                }, function (error) { return console.log('Error requesting location permissions' + JSON.stringify(error)); });
            }
        });
    };
    DashboardPage.prototype.start = function () {
        this.locationTracker.startTracking();
        lat1 = this.locationTracker.lat;
        lng1 = this.locationTracker.lng;
        var str = this.locationTracker.lat.toString();
        this.splitlat = str.slice(0, 5);
        var str2 = this.locationTracker.lng.toString();
        this.splitlng = str2.slice(0, 5);
        date = new Date().toISOString();
        acc = this.locationTracker.acc;
    };
    DashboardPage.prototype.help = function () {
        var toast = this.toastCtrl.create({
            message: 'Under Construction',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    DashboardPage.prototype.gotomaps = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    DashboardPage.prototype.gotosendmanager = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sendmanager_sendmanager__["a" /* SendmanagerPage */]);
    };
    DashboardPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */]);
    };
    DashboardPage.prototype.logout = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Confirm',
            message: 'Do you want to Logout?',
            buttons: [{
                    text: "Logout",
                    handler: function () { _this.logou1(); }
                }, {
                    text: "Cancel",
                    role: 'cancel'
                }]
        });
        alert.present();
    };
    DashboardPage.prototype.logou1 = function () {
        this.storage.remove("login");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]);
    };
    DashboardPage.prototype.gototabs = function () {
        //this.navCtrl.push(MultipleimagePage);
        var alert = this.alert.create({
            title: 'Message',
            message: 'Under Construction',
            buttons: [
                {
                    text: "Ok",
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    DashboardPage.prototype.saveSchemesMaster = function (wa_name, id, wa_code, wat_code, size) {
        var _this = this;
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS tbl_scheme_master(id,wa_code,wat_code,wa_name)', [])
                .then(function () { return console.log("img  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO tbl_scheme_master(id,wa_code,wat_code,wa_name) VALUES(?,?,?,?)', [id, wa_code, wat_code, wa_name])
                .then(function () { return console.log(" img INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from tbl_scheme_master', []).then(function (data) {
                _this.scheme_master = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.scheme_master.push({ id: data.rows.item(i).id, wa_code: data.rows.item(i).wa_code, wat_code: data.rows.item(i).wat_code, wa_name: data.rows.item(i).wa_name });
                    }
                    console.log(_this.scheme_master);
                    _this.storage.set("checkinsert", size);
                }
            }, function (err) {
                console.log('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return console.log(JSON.stringify(e)); });
    };
    DashboardPage.prototype.exit = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Confirm',
            message: 'Do you want to exit?',
            buttons: [{
                    text: "Exit",
                    handler: function () { _this.exitApp(); }
                }, {
                    text: "Cancel",
                    role: 'cancel'
                }]
        });
        alert.present();
    };
    DashboardPage.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar background-color="#057989" hideBackButton="true" scroll="false">\n    <ion-buttons left>\n      <img height="35" src="assets/imgs/police_logo.png" />\n    </ion-buttons>\n    <ion-title style="text-align: center">\n      <label text-center style="font-size: 16px; font-family: arial; text-align: center;font-weight: bold"> Maharashtra State Police  Housing Corporation </label>\n    </ion-title>\n    <ion-buttons right>\n      <img height="35" src="assets/imgs/mrsac_logo.png" />\n    </ion-buttons>\n\n  </ion-navbar >\n  <ion-navbar  hideBackButton="true" scroll="false" style="margin-top: 0.5px  ;text-align:left" class="toolbar-title">\n     \n      <ion-title style="text-align:left" class="ion-title">\n        <label  style="font-size: 14px; font-family: arial; text-align:left;font-weight: bold">Dashboard </label>\n      </ion-title>\n     \n  \n    </ion-navbar>\n</ion-header>\n<ion-content style="background-image: assets/imgs/place" >\n\n    <!-- <img src="assets/imgs/example.jpg"> -->\n  <ion-grid text-center style="margin-top: 60px" >\n\n\n\n    <ion-row wrap>\n      <ion-col width-50 (click)="gotomaps()">\n        \n        <img src="assets/imgs/place.png" height="70" width="70" />\n      </ion-col>\n      <ion-col width-50 (click)="gotosendmanager()">\n        <img src="assets/imgs/sendm.png" height="70" width="70" />\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row wrap>\n      <ion-col width-50>\n        <label style="font-size: 13px; font-family: arial; font-weight: bold;color:#033941"> Mapping</label>\n      </ion-col>\n\n      <ion-col width-50>\n        <label style="font-size: 13px; font-family: arial; font-weight: bold;color:#033941"> Send Manager </label>\n      </ion-col>\n\n    </ion-row>\n\n    <!-- <ion-row style="margin-top: 40px">\n      <ion-col width-100 center (click)="profile()">\n        <img src="assets/imgs/male.png" height="60" width="60" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col width-100 center>\n        <label style="font-size: 13px; font-family: arial;font-weight: bold;color:#033941"> Profile Manager</label>\n      </ion-col>\n\n    </ion-row> -->\n\n    <ion-row wrap style="margin-top: 40px">\n    \n      <ion-col width-50 (click)="profile()">\n        <img src="assets/imgs/male.png" height="70" width="70" />\n      </ion-col>\n\n\n      <ion-col width-50 (click)="exit()">\n        <img src="assets/imgs/off.png" height="60" width="60" />\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row wrap>\n      <ion-col width-50>\n        <label style="font-size: 13px; font-family: arial; font-weight: bold;color:#033941"> Profile</label>\n      </ion-col>\n\n      <ion-col width-50>\n        <label style="font-size: 13px; font-family: arial; font-weight: bold;color:#033941"> Exit </label>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row style="margin-top: 40px">\n      <ion-col width-50 (click)="logout()" >\n        <img src="assets/imgs/help.png" height="60" width="60" />\n      </ion-col>\n     \n    </ion-row>\n\n\n    <ion-row>\n        <ion-col width-50>\n            <label style="font-size: 13px; font-family: arial; font-weight: bold;color:#033941" (click)="gototabs()"> Logout </label>\n          </ion-col>\n    \n         \n    </ion-row>\n\n\n   \n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_12__providers_urlsetup_urlsetup__["a" /* UrlsetupProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_8__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 183,
	"./af.js": 183,
	"./ar": 184,
	"./ar-dz": 185,
	"./ar-dz.js": 185,
	"./ar-kw": 186,
	"./ar-kw.js": 186,
	"./ar-ly": 187,
	"./ar-ly.js": 187,
	"./ar-ma": 188,
	"./ar-ma.js": 188,
	"./ar-sa": 189,
	"./ar-sa.js": 189,
	"./ar-tn": 190,
	"./ar-tn.js": 190,
	"./ar.js": 184,
	"./az": 191,
	"./az.js": 191,
	"./be": 192,
	"./be.js": 192,
	"./bg": 193,
	"./bg.js": 193,
	"./bm": 194,
	"./bm.js": 194,
	"./bn": 195,
	"./bn.js": 195,
	"./bo": 196,
	"./bo.js": 196,
	"./br": 197,
	"./br.js": 197,
	"./bs": 198,
	"./bs.js": 198,
	"./ca": 199,
	"./ca.js": 199,
	"./cs": 200,
	"./cs.js": 200,
	"./cv": 201,
	"./cv.js": 201,
	"./cy": 202,
	"./cy.js": 202,
	"./da": 203,
	"./da.js": 203,
	"./de": 204,
	"./de-at": 205,
	"./de-at.js": 205,
	"./de-ch": 206,
	"./de-ch.js": 206,
	"./de.js": 204,
	"./dv": 207,
	"./dv.js": 207,
	"./el": 208,
	"./el.js": 208,
	"./en-SG": 209,
	"./en-SG.js": 209,
	"./en-au": 210,
	"./en-au.js": 210,
	"./en-ca": 211,
	"./en-ca.js": 211,
	"./en-gb": 212,
	"./en-gb.js": 212,
	"./en-ie": 213,
	"./en-ie.js": 213,
	"./en-il": 214,
	"./en-il.js": 214,
	"./en-nz": 215,
	"./en-nz.js": 215,
	"./eo": 216,
	"./eo.js": 216,
	"./es": 217,
	"./es-do": 218,
	"./es-do.js": 218,
	"./es-us": 219,
	"./es-us.js": 219,
	"./es.js": 217,
	"./et": 220,
	"./et.js": 220,
	"./eu": 221,
	"./eu.js": 221,
	"./fa": 222,
	"./fa.js": 222,
	"./fi": 223,
	"./fi.js": 223,
	"./fo": 224,
	"./fo.js": 224,
	"./fr": 225,
	"./fr-ca": 226,
	"./fr-ca.js": 226,
	"./fr-ch": 227,
	"./fr-ch.js": 227,
	"./fr.js": 225,
	"./fy": 228,
	"./fy.js": 228,
	"./ga": 229,
	"./ga.js": 229,
	"./gd": 230,
	"./gd.js": 230,
	"./gl": 231,
	"./gl.js": 231,
	"./gom-latn": 232,
	"./gom-latn.js": 232,
	"./gu": 233,
	"./gu.js": 233,
	"./he": 234,
	"./he.js": 234,
	"./hi": 235,
	"./hi.js": 235,
	"./hr": 236,
	"./hr.js": 236,
	"./hu": 237,
	"./hu.js": 237,
	"./hy-am": 238,
	"./hy-am.js": 238,
	"./id": 239,
	"./id.js": 239,
	"./is": 240,
	"./is.js": 240,
	"./it": 241,
	"./it-ch": 242,
	"./it-ch.js": 242,
	"./it.js": 241,
	"./ja": 243,
	"./ja.js": 243,
	"./jv": 244,
	"./jv.js": 244,
	"./ka": 245,
	"./ka.js": 245,
	"./kk": 246,
	"./kk.js": 246,
	"./km": 247,
	"./km.js": 247,
	"./kn": 248,
	"./kn.js": 248,
	"./ko": 249,
	"./ko.js": 249,
	"./ku": 250,
	"./ku.js": 250,
	"./ky": 251,
	"./ky.js": 251,
	"./lb": 252,
	"./lb.js": 252,
	"./lo": 253,
	"./lo.js": 253,
	"./lt": 254,
	"./lt.js": 254,
	"./lv": 255,
	"./lv.js": 255,
	"./me": 256,
	"./me.js": 256,
	"./mi": 257,
	"./mi.js": 257,
	"./mk": 258,
	"./mk.js": 258,
	"./ml": 259,
	"./ml.js": 259,
	"./mn": 260,
	"./mn.js": 260,
	"./mr": 261,
	"./mr.js": 261,
	"./ms": 262,
	"./ms-my": 263,
	"./ms-my.js": 263,
	"./ms.js": 262,
	"./mt": 264,
	"./mt.js": 264,
	"./my": 265,
	"./my.js": 265,
	"./nb": 266,
	"./nb.js": 266,
	"./ne": 267,
	"./ne.js": 267,
	"./nl": 268,
	"./nl-be": 269,
	"./nl-be.js": 269,
	"./nl.js": 268,
	"./nn": 270,
	"./nn.js": 270,
	"./pa-in": 271,
	"./pa-in.js": 271,
	"./pl": 272,
	"./pl.js": 272,
	"./pt": 273,
	"./pt-br": 274,
	"./pt-br.js": 274,
	"./pt.js": 273,
	"./ro": 275,
	"./ro.js": 275,
	"./ru": 276,
	"./ru.js": 276,
	"./sd": 277,
	"./sd.js": 277,
	"./se": 278,
	"./se.js": 278,
	"./si": 279,
	"./si.js": 279,
	"./sk": 280,
	"./sk.js": 280,
	"./sl": 281,
	"./sl.js": 281,
	"./sq": 282,
	"./sq.js": 282,
	"./sr": 283,
	"./sr-cyrl": 284,
	"./sr-cyrl.js": 284,
	"./sr.js": 283,
	"./ss": 285,
	"./ss.js": 285,
	"./sv": 286,
	"./sv.js": 286,
	"./sw": 287,
	"./sw.js": 287,
	"./ta": 288,
	"./ta.js": 288,
	"./te": 289,
	"./te.js": 289,
	"./tet": 290,
	"./tet.js": 290,
	"./tg": 291,
	"./tg.js": 291,
	"./th": 292,
	"./th.js": 292,
	"./tl-ph": 293,
	"./tl-ph.js": 293,
	"./tlh": 294,
	"./tlh.js": 294,
	"./tr": 295,
	"./tr.js": 295,
	"./tzl": 296,
	"./tzl.js": 296,
	"./tzm": 297,
	"./tzm-latn": 298,
	"./tzm-latn.js": 298,
	"./tzm.js": 297,
	"./ug-cn": 299,
	"./ug-cn.js": 299,
	"./uk": 300,
	"./uk.js": 300,
	"./ur": 301,
	"./ur.js": 301,
	"./uz": 302,
	"./uz-latn": 303,
	"./uz-latn.js": 303,
	"./uz.js": 302,
	"./vi": 304,
	"./vi.js": 304,
	"./x-pseudo": 305,
	"./x-pseudo.js": 305,
	"./yo": 306,
	"./yo.js": 306,
	"./zh-cn": 307,
	"./zh-cn.js": 307,
	"./zh-hk": 308,
	"./zh-hk.js": 308,
	"./zh-tw": 309,
	"./zh-tw.js": 309
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 411;

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_urlsetup_urlsetup__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(_state, sqlite, app, alertCtrl, platform, statusBar, splashScreen, storage) {
        var _this = this;
        this._state = _state;
        this.sqlite = sqlite;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.skip = 'sucessfullogin';
        this.scheme_master = [];
        this.DateList = [];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.storage.get('login').then(function (data) {
                var skipmessage = data;
                if (_this.skip == skipmessage) {
                    //this.getWelfateSchme();
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */]);
                }
                else {
                    // this.getWelfateSchme();
                    //this.nav.push(CreateEmailPage);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
                    //this.nav.push(DashboardPage);
                }
            });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_urlsetup_urlsetup__["a" /* UrlsetupProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDrawTextDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FilePath } from '@ionic-native/file-path';









var ImageDrawTextDirective = /** @class */ (function () {
    function ImageDrawTextDirective(device, transfer, loadingController, base64, http, storage, toastCtrl, alert, base64ToGallery, sqlite, file, loadingCtrl) {
        this.device = device;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.base64 = base64;
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alert = alert;
        this.base64ToGallery = base64ToGallery;
        this.sqlite = sqlite;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.username = '';
        this.items = [];
        this.imgProcessing = false;
        this.dirname = "msphc_images";
        this.folderpath = "file:///storage/emulated/0/MSPHC/msphc_images";
        this.loaded = false;
        this.storeimg = [];
    }
    ImageDrawTextDirective.prototype.onLoad = function (img) {
        if (this.loaded) {
            return;
            //this.loaded = false
        }
        this.loaded = true;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var radius = canvas.height / 2;
        canvas.height = 600;
        canvas.width = 600;
        context.drawImage(img, 0, 0);
        context.fillStyle = "#488AC7";
        context.fillRect(0, 0, canvas.width, 30);
        context.fillRect(0, canvas.height - 30, canvas.width, canvas.height);
        //context.font = "100px";
        context.font = radius * 0.15 + "100px arial";
        context.textBaseline = "middle";
        context.textAlign = 'center';
        context.fillStyle = 'white';
        context.fillText(this.text, 300, 10);
        context.fillText(this.texts, 300, 590);
        img.src = canvas.toDataURL();
        context.fillStyle = "#488AC7";
        context.fillRect(0, 0, 30, 0);
        var datass = canvas.toDataURL();
        this.storage.set('base64', datass);
        var splitdata = [];
        var solitdata1 = [];
        splitdata = this.texts.split('SSS-MSPHC/MAHAPOLICE');
        var second = splitdata[0];
        var third = splitdata[1];
        solitdata1 = second.split('.png');
        var fourth = solitdata1[0];
        var ditems = [{ key: 'uuid', value: this.device.uuid }];
        var d = new Date(), n = d.getTime(), newFileName = n;
        this.timestamp = newFileName;
        var deviceid = this.device.uuid;
        //alert(fourth);
        this.saveBase64(datass, fourth + ".png");
    };
    ImageDrawTextDirective.prototype.b64toBlob = function (b64Data, contentType) {
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
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    ImageDrawTextDirective.prototype.saveBase64 = function (base64, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var realData = base64.split(",")[1];
            var blob = _this.b64toBlob(realData, 'image/png');
            var result = _this.file.createDir(_this.file.externalRootDirectory + "/MSPHC/", _this.dirname, true);
            result.then(function (data) {
                _this.file.writeFile(_this.file.externalRootDirectory + "/MSPHC/msphc_images", name, blob)
                    .then(function () {
                    resolve(_this.folderpath + name);
                    //alert(this.folderpath+name)
                    _this.saveimgfile(_this.folderpath + name);
                })
                    .catch(function (err) {
                    alert('error writing blob');
                    reject(err);
                });
            }).catch(function (error) {
                alert("error  " + error);
            });
        });
    };
    ImageDrawTextDirective.prototype.getuid = function () {
        var ditems = [{ key: 'uuid', value: this.device.uuid }];
        this.ditems = ditems;
    };
    ImageDrawTextDirective.prototype.saveimgfile = function (path) {
        var _this = this;
        this.storage.set('path', path);
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
                .then(function () { return console.log("img  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
                .then(function () { return console.log(" img INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from tbl_image', []).then(function (data) {
                _this.storeimg = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.storeimg.push({ name: data.rows.item(i).name });
                    }
                    // alert(this.storeimg);
                    _this.storage.set('image', path);
                }
            }, function (err) {
                alert('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    ImageDrawTextDirective.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageDrawTextDirective.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageDrawTextDirective.prototype, "texts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('load', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImageDrawTextDirective.prototype, "onLoad", null);
    ImageDrawTextDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[image-draw-text]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
    ], ImageDrawTextDirective);
    return ImageDrawTextDirective;
}());

//# sourceMappingURL=image-draw-text.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDrawTextDirective2Directive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FilePath } from '@ionic-native/file-path';









var ImageDrawTextDirective2Directive = /** @class */ (function () {
    function ImageDrawTextDirective2Directive(device, transfer, loadingController, base64, http, storage, toastCtrl, alert, base64ToGallery, sqlite, file, loadingCtrl) {
        this.device = device;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.base64 = base64;
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alert = alert;
        this.base64ToGallery = base64ToGallery;
        this.sqlite = sqlite;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.username = '';
        this.items = [];
        this.imgProcessing = false;
        this.dirname = "msphc_images";
        this.folderpath = "file:///storage/emulated/0/MSPHC/msphc_images";
        this.loaded = false;
        this.storeimg = [];
    }
    ImageDrawTextDirective2Directive.prototype.onLoad = function (img2) {
        if (this.loaded) {
            return;
            //this.loaded = false
        }
        this.loaded = true;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var radius = canvas.height / 2;
        canvas.height = 600;
        canvas.width = 600;
        context.drawImage(img2, 0, 0);
        context.fillStyle = "#488AC7";
        context.fillRect(0, 0, canvas.width, 30);
        context.fillRect(0, canvas.height - 30, canvas.width, canvas.height);
        //context.font = "100px";
        context.font = radius * 0.15 + "100px arial";
        context.textBaseline = "middle";
        context.textAlign = 'center';
        context.fillStyle = 'white';
        context.fillText(this.text, 300, 10);
        context.fillText(this.texts, 300, 590);
        img2.src = canvas.toDataURL();
        context.fillStyle = "#488AC7";
        context.fillRect(0, 0, 30, 0);
        var datass = canvas.toDataURL();
        this.storage.set('base64', datass);
        var splitdata = [];
        var solitdata1 = [];
        splitdata = this.texts.split('SSS-MSPHC/MAHAPOLICE');
        var second = splitdata[0];
        var third = splitdata[1];
        solitdata1 = second.split('.png');
        var fourth = solitdata1[0];
        var ditems = [{ key: 'uuid', value: this.device.uuid }];
        var d = new Date(), n = d.getTime(), newFileName = n;
        this.timestamp = newFileName;
        var deviceid = this.device.uuid;
        this.saveBase64(datass, fourth + ".png");
    };
    ImageDrawTextDirective2Directive.prototype.b64toBlob = function (b64Data, contentType) {
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
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    ImageDrawTextDirective2Directive.prototype.saveBase64 = function (base64, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var realData = base64.split(",")[1];
            var blob = _this.b64toBlob(realData, 'image/png');
            var result = _this.file.createDir(_this.file.externalRootDirectory + "/MSPHC/", _this.dirname, true);
            result.then(function (data) {
                _this.file.writeFile(_this.file.externalRootDirectory + "/MSPHC/msphc_images", name, blob)
                    .then(function () {
                    resolve(_this.folderpath + name);
                    // alert(this.folderpath+name)
                    _this.saveimgfile(_this.folderpath + name);
                })
                    .catch(function (err) {
                    alert('error writing blob');
                    reject(err);
                });
            }).catch(function (error) {
                alert("error  " + error);
            });
        });
    };
    ImageDrawTextDirective2Directive.prototype.getuid = function () {
        var ditems = [{ key: 'uuid', value: this.device.uuid }];
        this.ditems = ditems;
    };
    ImageDrawTextDirective2Directive.prototype.saveimgfile = function (path) {
        var _this = this;
        this.storage.set('path1', path);
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
                .then(function () { return console.log("img  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
                .then(function () { return console.log(" img INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from tbl_image', []).then(function (data) {
                _this.storeimg = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.storeimg.push({ name: data.rows.item(i).name });
                    }
                    // alert(this.storeimg);
                    _this.storage.set('image', path);
                }
            }, function (err) {
                alert('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    ImageDrawTextDirective2Directive.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageDrawTextDirective2Directive.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageDrawTextDirective2Directive.prototype, "texts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('load', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImageDrawTextDirective2Directive.prototype, "onLoad", null);
    ImageDrawTextDirective2Directive = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[image-draw-text-directive2]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
    ], ImageDrawTextDirective2Directive);
    return ImageDrawTextDirective2Directive;
}());

//# sourceMappingURL=image-draw-text-directive2.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDrawText3Directive; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FilePath } from '@ionic-native/file-path';









var ImageDrawText3Directive = /** @class */ (function () {
    function ImageDrawText3Directive(device, transfer, loadingController, base64, http, storage, toastCtrl, alert, base64ToGallery, sqlite, file, loadingCtrl) {
        this.device = device;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.base64 = base64;
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.alert = alert;
        this.base64ToGallery = base64ToGallery;
        this.sqlite = sqlite;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.username = '';
        this.items = [];
        this.imgProcessing = false;
        this.dirname = "msphc_images";
        this.folderpath = "file:///storage/emulated/0/MSPHC/msphc_images";
        this.loaded = false;
        this.storeimg = [];
    }
    ImageDrawText3Directive.prototype.onLoad = function (img3) {
        if (this.loaded) {
            return;
            //this.loaded = false
        }
        this.loaded = true;
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var radius = canvas.height / 2;
        canvas.height = 600;
        canvas.width = 600;
        context.drawImage(img3, 0, 0);
        context.fillStyle = "#488AC7";
        context.fillRect(0, 0, canvas.width, 30);
        context.fillRect(0, canvas.height - 30, canvas.width, canvas.height);
        //context.font = "100px";
        context.font = radius * 0.15 + "100px arial";
        context.textBaseline = "middle";
        context.textAlign = 'center';
        context.fillStyle = 'white';
        context.fillText(this.text, 300, 10);
        context.fillText(this.texts, 300, 590);
        img3.src = canvas.toDataURL();
        context.fillStyle = "#488AC7";
        context.fillRect(0, 0, 30, 0);
        var datass = canvas.toDataURL();
        this.storage.set('base64', datass);
        var splitdata = [];
        var solitdata1 = [];
        splitdata = this.texts.split('SSS-MSPHC/MAHAPOLICE');
        var second = splitdata[0];
        var third = splitdata[1];
        solitdata1 = second.split('.png');
        var fourth = solitdata1[0];
        var ditems = [{ key: 'uuid', value: this.device.uuid }];
        var d = new Date(), n = d.getTime(), newFileName = n;
        this.timestamp = newFileName;
        var deviceid = this.device.uuid;
        this.saveBase64(datass, fourth + ".png");
    };
    ImageDrawText3Directive.prototype.b64toBlob = function (b64Data, contentType) {
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
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    ImageDrawText3Directive.prototype.saveBase64 = function (base64, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var realData = base64.split(",")[1];
            var blob = _this.b64toBlob(realData, 'image/png');
            var result = _this.file.createDir(_this.file.externalRootDirectory + "/MSPHC/", _this.dirname, true);
            result.then(function (data) {
                _this.file.writeFile(_this.file.externalRootDirectory + "/MSPHC/msphc_images", name, blob)
                    .then(function () {
                    resolve(_this.folderpath + name);
                    // alert(this.folderpath+name)
                    _this.saveimgfile(_this.folderpath + name);
                })
                    .catch(function (err) {
                    alert('error writing blob');
                    reject(err);
                });
            }).catch(function (error) {
                alert("error  " + error);
            });
        });
    };
    ImageDrawText3Directive.prototype.getuid = function () {
        var ditems = [{ key: 'uuid', value: this.device.uuid }];
        this.ditems = ditems;
    };
    ImageDrawText3Directive.prototype.saveimgfile = function (path) {
        var _this = this;
        this.storage.set('path2', path);
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS tbl_image(id INTEGER PRIMARY KEY AUTOINCREMENT,name)', [])
                .then(function () { return console.log("img  Executed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('INSERT INTO tbl_image(name) VALUES(?)', [path])
                .then(function () { return console.log(" img INDERTed"); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('select * from tbl_image', []).then(function (data) {
                _this.storeimg = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        _this.storeimg.push({ name: data.rows.item(i).name });
                    }
                    // alert(this.storeimg);
                    _this.storage.set('image', path);
                }
            }, function (err) {
                alert('Unable to execute sql: ' + JSON.stringify(err));
            });
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    ImageDrawText3Directive.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageDrawText3Directive.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageDrawText3Directive.prototype, "texts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('load', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImageDrawText3Directive.prototype, "onLoad", null);
    ImageDrawText3Directive = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[image-draw-text3]' // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64_to_gallery__["a" /* Base64ToGallery */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* LoadingController */]])
    ], ImageDrawText3Directive);
    return ImageDrawText3Directive;
}());

//# sourceMappingURL=image-draw-text3.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlsetupProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UrlsetupProvider = /** @class */ (function () {
    function UrlsetupProvider(loadingController, _http) {
        this.loadingController = loadingController;
        this._http = _http;
        this.department = [];
        //Server_url="http://m2.mrsac.org.in:8080/MSPHC-API/noauth"
        this.Server_url = "http://43.241.63.17:8080/MSPHC-API/noauth";
        console.log('Hello Url Provider');
        //let hash = Md5.hashStr("password");
    }
    UrlsetupProvider.prototype.loadContractorList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.get(this.Server_url + "/contractor_list", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UrlsetupProvider.prototype.loadRegions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.get(this.Server_url + "/divisions", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UrlsetupProvider.prototype.loadprojectList = function (pmc, contractor) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.get(this.Server_url + "/data/" + pmc + "/" + contractor, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UrlsetupProvider.prototype.loadPMC_LST = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.get(this.Server_url + "/pmc_list", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UrlsetupProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UrlsetupProvider);
    return UrlsetupProvider;
}());

//# sourceMappingURL=urlsetup.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_email_create_email__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forgotpassword_forgotpassword__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var parameter1;
var parameter2;
var LoginPage = /** @class */ (function () {
    function LoginPage(sqlite, toastCtrl, loadingCtrl, storage, navCtrl, fb, http, navParams, platform) {
        this.sqlite = sqlite;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.platform = platform;
        this.type = 'password';
        this.showPass = false;
        this.skip = 'sucessfullogin';
        this.user_data = [];
        this.loginkey = 'sucessfullogin';
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.data = {};
        this.data.username = '';
        this.data.password = '';
        parameter1 = navParams.get('param1');
        parameter2 = navParams.get('param2');
        this.storage.get('sucessfullogin').then(function (data) {
            var skipmessage = data;
        });
        this.authForm = fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)])],
        });
    }
    LoginPage.prototype.submitForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.platform.is('android') && this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.platform.is('android') && this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_email_create_email__["a" /* CreateEmailPage */]);
    };
    LoginPage.prototype.testlogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    LoginPage.prototype.resetpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var contact_no = this.data.username;
        var password = this.data.password;
        this.loading = this.loadingCtrl.create({ content: "Log In ..." });
        this.loading.present();
        var url = 'http://43.241.63.17:8080/MSPHC-API/api/auth/signin';
        // var url = 'http://m2.mrsac.org.in:8080/MSPHC-API/api/auth/signin';    
        // var url = 'http://localhost:8080/api/auth/signin'; 
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // let body =   "&contact_no=" + contact_no + "&password="+password;
        var data = JSON.stringify({ contact_no: contact_no, password: password });
        console.log(data);
        return new Promise(function (resolve) {
            _this.http.post(url, data, options).map(function (res) { return res.json(); }).subscribe(function (data) {
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
                var contact_no = data.conatct_no;
                var name = data.name;
                var contractor_name = data.contractor_name;
                var pmc_name = data.pmc_name;
                var email = data.email;
                var region = data.region;
                //  alert(name + "  " + contractor_name + "  " + pmc_name + "  " + email + "  " +region +  "" + contact_no )
                var messege = "Login Successfully";
                var res_mes = data.message;
                if (contact_no != null) {
                    var toast = _this.toastCtrl.create({
                        message: messege,
                        duration: 3000,
                        position: 'top'
                    });
                    _this.registration(name, email, contact_no, pmc_name, contractor_name, region);
                    _this.storage.set('login', _this.loginkey);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]).then(function () {
                        var index = _this.navCtrl.getActive().index;
                        _this.navCtrl.remove(0, index);
                    });
                    toast.present();
                    setTimeout(function () {
                        _this.loading.dismissAll();
                    }, 2500);
                }
                else {
                    var message = data.message;
                    alert("Please enter correct username and password ");
                    _this.loading.dismissAll();
                }
            }, function (err) {
                alert("err" + err);
                _this.loading.dismissAll();
            });
        });
    };
    LoginPage.prototype.registration = function (name, useremail, mobileno1, pmc, contractor, region) {
        var _this = this;
        //alert("data")
        this.sqlite.create({
            name: 'msphc.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('Drop TABLE registration', []);
            db.executeSql('CREATE TABLE IF NOT EXISTS registration(id INTEGER PRIMARY KEY AUTOINCREMENT, official_name ,mob_no, pmc, email, contractor,resion)', [])
                .then(function () { return console.log("CEATE Query Executed"); })
                .catch(function (e) { return alert(e); });
            db.executeSql("select * from registration", []).then(function (data) {
                if (data.rows.length > 0) {
                }
                else {
                    db.executeSql('INSERT INTO registration(official_name ,mob_no, pmc, email, contractor,resion) VALUES(?,?,?,?,?,?)', [name, mobileno1, pmc, useremail, contractor, region])
                        .then(function () { return console.log("INSERT Query Executed"); })
                        .catch(function (e) { return alert(e); });
                    db.executeSql('select * from registration', []).then(function (data) {
                        _this.user_data = [];
                        if (data.rows.length > 0) {
                            for (var i = 0; i < data.rows.length; i++) {
                                // alert("INSERTING........................")
                                _this.user_data.push({
                                    official_name: data.rows.item(i).official_name,
                                    mob_no: data.rows.item(i).mob_no,
                                    pmc: data.rows.item(i).pmc,
                                    contractor: data.rows.item(i).contractor,
                                    resion: data.rows.item(i).resion,
                                    email: data.rows.item(i).email
                                });
                                var name = data.rows.item(i).official_name;
                                // alert(name)
                                //alert("INSERTING DONE........................")
                            }
                        }
                        _this.storage.set('login', _this.loginkey);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
                    }, function (err) {
                        alert('Unable to execute sql: ' + JSON.stringify(err));
                    });
                }
            });
        }).catch(function (e) { return alert(JSON.stringify(e)); });
        // alert(this.username);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/login/login.html"*/'\n<ion-content padding>\n  <ion-header>\n    <ion-navbar background-color="#057989" hideBackButton="false" scroll="false">\n      <ion-buttons left>\n        <img height="35" src="assets/imgs/police_logo.png" />\n      </ion-buttons>\n      <ion-title >\n        <label text-center style="font-size: 16px; font-family: arial; text-align: center;font-weight: bold"> Maharashtra State Police  Housing Corporation </label>\n      </ion-title>\n      <ion-buttons right>\n        <img height="35" src="assets/imgs/mrsac_logo.png" />\n      </ion-buttons>\n  </ion-navbar >\n    </ion-header>\n          <ion-card-header >\n   \n    <!-- <img src="assets/imgs/mrsac_logo.png" /> -->\n\n    \n      <div class="or-label" text-center  style="margin-top: 40px"  >\n          <img alt="Logo" height="235" width="235"  src="assets/imgs/policelogo.png" >\n      </div>\n  \n  </ion-card-header>\n  <form [formGroup]="authForm" >\n    <ion-item>\n      <ion-label floating>Mobile no</ion-label>\n      <ion-input type="tel" value="" style="color: #000" [formControl]="authForm.controls[\'username\']" [ngClass]="{\'error-border\':!authForm.controls[\'username\'].valid}" [(ngModel)]="data.username" maxlength="10"></ion-input>\n      <!-- <ion-icon name="person" item-right ></ion-icon> -->\n    </ion-item><br />\n    <div class="error-box" *ngIf="authForm.controls[\'username\'].hasError(\'required\') && authForm.controls[\'username\'].touched">* Username is required!</div>\n    <div class="error-box" *ngIf="authForm.controls[\'username\'].hasError(\'minlength\') && authForm.controls[\'username\'].touched">* Minimum username length is 5!</div>\n    <div class="error-box" *ngIf="authForm.controls[\'username\'].hasError(\'maxlength\') && authForm.controls[\'username\'].touched">* Maximum username length is 10!</div>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input [formControl]="authForm.controls[\'password\']" value="" [type]="passwordType" clearOnEdit="false" [(ngModel)]="data.password"></ion-input>  \n      \n      <!-- <ion-input  type="password" [formControl]="authForm.controls[\'password\']" [(ngModel)]="data.password"></ion-input> -->\n      <!-- <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="ios-eye-off-outline"></ion-icon></button>\n <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="ios-eye-outline"></ion-icon></button> -->\n <!-- <ion-icon item-end [name]="passwordIcon" class="passIcon" (click)=\'hideShowPassword()\'></ion-icon> -->\n    \n</ion-item><br />\n    <div class="error-box" *ngIf="authForm.controls[\'password\'].hasError(\'required\') && authForm.controls[\'password\'].touched">* Password is required!</div>\n    <div class="error-box" *ngIf="authForm.controls[\'password\'].hasError(\'minlength\') && authForm.controls[\'password\'].touched">* Minimum username length is 5!</div>\n    <div class="error-box" *ngIf="authForm.controls[\'password\'].hasError(\'checkFirstCharacterValidatorOutput\') && authForm.controls[\'password\'].touched">* Password cant\'t start with number!</div><br />\n    \n\n    <button type="submit"  ion-button full  [disabled]="!authForm.valid"style="text-transform: none;background: #057989"(click)="login()">Sign In</button>\n\n    <div class="or-label" text-center margin-top=20px>\n      Don\'t have an Account ?\n    </div>\n    \n    <div class="wrapper" margin-top=20px>\n      <!-- <button  color="secondary" ion-button    (click)="presentActionSheet()"> -->\n        <button ion-button round ion-center style="background: #057989 ;text-transform: none"(click)="register()">Register Here</button>\n\n        <button ion-button round ion-center style="background: #057989 ;text-transform: none"(click)="resetpassword()">Forgot password</button>\n   </div>\n\n  </form>\n<!-- \n  <button type="register" ion-button full style="background: #00acf7" >Register Here</button> -->\n  <!-- style="text-align:center;font-size:10px;font-weight:bold;margin-bottom:5%;margin-top: 10px"  -->\n  <div  style="margin-top: 50px">\n  <div     style="text-align:center;font-size:10px;font-weight:bold"   >\n      <img  height="50" src="assets/imgs/mrsac_logo.png"/>\n     </div>\n     <div   class = "item item-text-wrap" style="text-align:center;font-size:10px;font-weight:bold;margin-top:5px;color:rgb(112, 111, 111);margin-top: 10px;">\n        &copy; Design and Developed by\n     </div>\n     <div   class = "item item-text-wrap" style="text-align:center;font-size:10px;font-weight:bold;margin-top:5px;color:rgb(112, 111, 111) ;margin-top: 10px;">\n      Maharashtra Remote Sensing Application Centre, Nagpur\n     </div>\n    \n    </div>\n  \n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/webwerks/Documents/Saryu_backup/Workspace/updated/msphcmappingapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocationTrackerProvider = /** @class */ (function () {
    function LocationTrackerProvider(zone, backgroundGeolocation, geolocation) {
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.lat = 0;
        this.lng = 0;
        this.acc = 0;
        this.tym = 0;
    }
    LocationTrackerProvider.prototype.startTracking = function () {
        // Background Tracking
        var _this = this;
        var config = {
            startForeground: false,
            desiredAccuracy: 50,
            stationaryRadius: 50,
            distanceFilter: 50,
            debug: false,
            interval: 2000
        };
        this.backgroundGeolocation.configure(config).then(function (location) {
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude + ',' + location.accuracy + ',' + location.timestamp);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
                _this.acc = location.accuracy;
                _this.tym = location.timestamp;
            });
        }, function (err) {
            console.log(err);
        });
        // Turn ON the background-geolocation system.
        //  this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.acc = position.coords.accuracy;
                _this.tym = position.timestamp;
            });
        });
    };
    LocationTrackerProvider.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        //this.watch.unsubscribe();
    };
    LocationTrackerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], LocationTrackerProvider);
    return LocationTrackerProvider;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map