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
    this.ordersService.collection$.subscribe({
        next: (data) => { console.log('Next : ', data)},
        error: (err) => { console.error('Error : ', err)},
        complete: () => { console.info('Fin de transmission')}
      })
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('Composant list order detruit ...')
  }
}
