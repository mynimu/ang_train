import { Bmi } from '../bmi';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-detail',
  templateUrl: './bmi-detail.component.html',
  styleUrls: ['./bmi-detail.component.css']
})
export class BmiDetailComponent  {
  
  bmi = new Bmi();
  onCalc():void {
    this.bmi.calc();
  }
}
