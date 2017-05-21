import { Injectable } from '@angular/core';


export interface CalculatorServiceIF {
  sum(a:number, b:number):number;
}

@Injectable()
export class CalculatorService implements CalculatorServiceIF{
  
  constructor(){
    console.log("created service")
  }
  
  sum(a:number, b:number): number{
    return (a||0)+(b||0);
  }
  
  
    
}
