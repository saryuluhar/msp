import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation ,BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';

/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationTrackerProvider {

  public watch: any;   
  public lat: number = 0;
  public lng: number = 0;
  public acc: number = 0;
  public tym: number = 0;
 
  constructor(public zone: NgZone,
    public backgroundGeolocation:BackgroundGeolocation,public geolocation:Geolocation) {
 
  }

  

  
 
  startTracking() {
 
    // Background Tracking
   
    let config = {
      startForeground:false,
      desiredAccuracy: 50,
      stationaryRadius: 50,
      distanceFilter: 50,
      debug: false,
      interval: 2000
    };
   
    this.backgroundGeolocation.configure(config).then((location) => {
   
      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude + ',' +location.accuracy + ','+location.timestamp) ;
    
      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
        this.acc = location.accuracy;
        this.tym = location.timestamp;
      });
   
    }, (err) => {
   
      console.log(err);
   
    });
   
    // Turn ON the background-geolocation system.
  //  this.backgroundGeolocation.start();
   
   
    // Foreground Tracking
   
  let options = {
    
    frequency: 3000,
    enableHighAccuracy: true
    
  };
   
  this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
   
    console.log(position);
   
    // Run update inside of Angular's zone
    this.zone.run(() => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.acc = position.coords.accuracy;
      this.tym = position.timestamp;
    });
   
  });
   
  }

  
 
  stopTracking() {
 
    console.log('stopTracking');
   
    this.backgroundGeolocation.finish();
    //this.watch.unsubscribe();
   
  }

}
