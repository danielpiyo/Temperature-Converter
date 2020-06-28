import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {
  celsius: number;  
  fahrenheit: number;  
  ngOnInit() {  
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }
  changeToCelc(f){
    this.celsius = Math.round(((f - 32)* 5/9)*10)/10;
  }
  changeToFr(c){    
      this.fahrenheit = Math.round(((c* 9/5) + 32)*10)/10;           
  }
  
}