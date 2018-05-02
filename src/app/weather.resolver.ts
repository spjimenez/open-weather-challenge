import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { WeatherService } from './weather.service';
import { Router } from '@angular/router';


@Injectable()

export class WeatherResolver implements Resolve<any> {

  constructor(private weatherService: WeatherService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.weatherService.getWeather(route.queryParams.city, route.queryParams.metric);
  }
}