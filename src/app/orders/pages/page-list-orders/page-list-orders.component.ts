import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleParent = 'Liste de commandes';
  public collection!: Order[];
  public headers: string[];

  public titleTest = 'Le titre de mon composant';

  public userList!: any;
  public userListHeaders!: string[];

  constructor(private ordersService: OrdersService, private http: HttpClient) { 
    this.headers = ["TjmHt", "NbJours", "TVA", "Type Presta", "Client", "State"];
    
    this.ordersService.collection$.subscribe({
        next: (data) => { 
          console.log('Next : ', data);
          this.collection = data;
        },
        error: (err) => { console.error('Error : ', err)},
        complete: () => { console.info('Fin de transmission')}
      })
      
      //Experiment api public + table component
      // this.http.get('https://reqres.in/api/users').subscribe((resp: any) => {
      //   this.userList = resp.data;
      //   this.userListHeaders = ['id', 'email', 'prenom', 'nom'];
      // })
  }
  

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
