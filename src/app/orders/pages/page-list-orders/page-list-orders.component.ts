import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleParent = 'Liste de commandes';
  
  // public objTitle: { titleParent: string};
  // Exercice change detection avec Objet
  
  constructor(private ordersService: OrdersService) { 
    console.log('Composant list order instancié !')
    this.ordersService.collection$.subscribe({
        next: (data) => { console.log('Next : ', data)},
        error: (err) => { console.error('Error : ', err)},
        complete: () => { console.info('Fin de transmission')}
      })

    // this.objTitle = { titleParent : "Notre titre dans un objet" };
    // Exercice change detection avec Objet
  }
  

  ngOnInit(): void {
  }

  public onClickChangeTitle(): void {
    this.titleParent = 'Un autre titre !';
    // this.objTitle = {titleParent : "Encore un autre titre"};
    // Exercice change detection avec Objet
  }

  ngOnDestroy(): void {
    console.log('Composant list order detruit ...')
  }
}
