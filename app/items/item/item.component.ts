import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output() itemsCreated=new EventEmitter()
  item1:string=""
  item2:string=""
  price1
  price2

  sendData()
  {
    this.price1=parseInt(this.price1)
    this.price2=parseInt(this.price2)
    const data={name1:this.item1,name2:this.item2,p1:this.price1,p2:this.price2}
    this.itemsCreated.emit(data)
  }

  constructor() { }

  ngOnInit() {
  }

}
