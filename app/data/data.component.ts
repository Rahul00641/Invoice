import { Component, OnInit, Input } from '@angular/core';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() dataItems={name1:"",name2:"",p1:0,p2:0}

  total:number
  created:boolean=false

  constructor(public bill:TotalService) {
  }

  letsCall() {
    let pr1=this.dataItems.p1
    let pr2=this.dataItems.p2
    this.total=this.bill.totalBill(pr1,pr2)
  }

  showTotal()
  {
    this.created=true
  }

  ngOnInit() {
  }

}
