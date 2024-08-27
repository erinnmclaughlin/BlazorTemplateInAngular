import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {

  weatherData:any;

  constructor(private readonly http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/weather.json').subscribe(res => {
      this.weatherData = res;
    });
  }
}
