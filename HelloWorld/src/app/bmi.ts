export class Bmi {
  groesse: number;
  gewicht: number;
  result: number ;

  calc():void {
    this.result = this.gewicht / Math.pow(this.groesse/100,2);
  }
}

