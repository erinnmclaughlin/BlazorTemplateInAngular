import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Forecast, ForecastHttpModel} from "./forecast";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {

  weatherData?:Forecast[];

  constructor(private readonly http: HttpClient) { }

  ngOnInit() {
    this.http.get<ForecastHttpModel[]>('/assets/weather.json').subscribe(res => {
      this.weatherData = res.map(r => new Forecast(r));
    });
  }
}
