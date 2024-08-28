export type ForecastHttpModel = {
  date:Date;
  temperatureC:number;
  summary:string;
}

export class Forecast {

  date:Date;
  temperatureC:number;
  temperatureF:number;
  summary:string;

  constructor(httpModel: ForecastHttpModel) {
    this.date = httpModel.date;
    this.temperatureC = httpModel.temperatureC;
    this.temperatureF = Math.round(32 + (httpModel.temperatureC / 0.5556));
    this.summary = httpModel.summary;
  }
}
