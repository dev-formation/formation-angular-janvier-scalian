import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() public headers!: string[];
  @Input() public collection!: Order[];

  constructor() {
    console.log("---- instanciation",);
    console.log("----", this.headers);
    console.log("----", this.collection);
   }

  ngOnChanges(): void {
    console.log("---- Change",);
    console.log("----", this.headers);
    console.log("----", this.collection);
  }

  ngOnInit(): void {
    console.log("---- Init",);
    console.log("----", this.headers);
    console.log("----", this.collection);
  }
  

}
