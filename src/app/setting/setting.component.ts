import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})

export class SettingComponent implements OnInit {

  city: string;
  metric: string;


  constructor(private router: Router) {
  }

  ngOnInit() {
  }


  saveForm(){
    // Asigno la locacion seleccionada
    console.log(this.metric);
    let location = {
      city: this.city,
      metric: this.metric
    };

    // Agrego la locacion a la
    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['home'], { queryParams: { city: this.city, metric: this.metric} });

  }

}
