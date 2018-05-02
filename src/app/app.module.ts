import { ActivatedRouteSnapshot, Resolve, Router, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SettingComponent } from './setting/setting.component';
import { WeatherService } from './weather.service';
import { WeatherResolver } from './weather.resolver';


const appRoutes=[
  {
    path:'', component:HomeComponent
  },
  {
    path:'setting', component:SettingComponent
  },
  {
    path:'home', component:HomeComponent, resolve: {
      weather: WeatherResolver
    }
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent  
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService, WeatherResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
