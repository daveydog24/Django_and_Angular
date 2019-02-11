import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityWeatherService } from '../../services/city-weather.service'

@Component({
    selector: 'app-washington-dc',
    templateUrl: './washington-dc.component.html',
    styleUrls: ['./washington-dc.component.css']
})
export class WashingtonDCComponent implements OnInit {
    city: string = 'washington';
    humidity?: number;
    tempature_avg?: number;
    tempature_high?: number;
    tempature_low?: number;
    status?: string;
    dataStuff= [];

    constructor(private _dataService: CityWeatherService) {
    }

    ngOnInit() { 
        let x = this._dataService.retrieveCityData(this.city)
        .subscribe(data => {
            this.humidity = data['main'].humidity;
            this.tempature_avg = (data['main'].temp_max + data['main'].temp_min) / 2;
            this.tempature_high = data['main'].temp_max;
            this.tempature_low = data['main'].temp_min;
            this.status = data['weather'][0].description;
            // console.log(data)
            // console.log(this.humidity);
            // console.log(this.tempature_avg);
            // console.log(this.tempature_high);
            // console.log(this.tempature_low);
            // console.log(this.status);
        },(error: any) => void (console.log(error)))
        this.dataStuff.push(x);
    }
}