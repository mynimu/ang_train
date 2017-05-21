import { LoveCalculatorService, FigoService } from './services.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent  {

  @Input() name1: string;
  @Input() name2: string;
  result: any;

  constructor (private service: LoveCalculatorService){}
  
   check() :void{
   
     this.service.calculateLove(this.name1, this.name2).then(a => this.result = a.percentage+'% -> '+a.result).catch(e => this.result = e);
     
     
   }
     
     
 

}
