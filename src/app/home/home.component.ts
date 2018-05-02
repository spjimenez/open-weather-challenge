import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class  HomeComponent implements OnInit {
  location = {
    city:  'london',
    code:'uk'
  };

  weather:any;
  value:any;

  constructor(private activatedRoute: ActivatedRoute) {      
  }

  ngOnInit() {

    this.activatedRoute.data.subscribe((data: any) => {
      this.weather = data.weather;
    });
  }

}
