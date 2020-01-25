import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  private total:number

  totalBill(price1, price2)
  {
    this.total=price1+price2
    return this.total
  }

  constructor() { 
  }
}
