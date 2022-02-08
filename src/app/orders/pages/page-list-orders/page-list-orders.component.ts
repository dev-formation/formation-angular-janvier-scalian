import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) { 
    console.log('Composant list order instancié !')
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('Composant list order detruit ...')
  }
}
