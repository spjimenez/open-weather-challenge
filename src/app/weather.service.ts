import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class WeatherService {

  // Mi Api Key	
  apiKey= 'ce8aa6386b95c08ce27ec4c2d8a1dbd0';
  
  url;
  weather;
  urlComplete;
  constructor(public http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  }

  getWeather(city, metric) {
    
    if(metric===''){      
      this.urlComplete = this.url + city +'&APPID=' + this.apiKey;

    }else{
      this.urlComplete = this.url + city +'&units='+metric+'&APPID=' + this.apiKey;
    }

    this.weather = this.http.get(this.urlComplete).map(res => res.json()).catch(function(err){
        // recover here if err is 404
        if(err.status === 404){
          return ['city not found'];
        }else{
          return [err.status];
        }
        
    });
    return this.weather;
  }
	
}
