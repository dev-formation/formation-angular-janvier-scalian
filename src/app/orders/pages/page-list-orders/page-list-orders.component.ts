import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { VersionService } from 'src/app/core/services/version.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleParent = 'Liste de commandes';
  // public collection!: Order[];
  public collection$: Observable<Order[]>;
  public numVersion$: BehaviorSubject<number>;
  public headers: string[];

  public titleTest = 'Le titre de mon composant';

  public userList!: any;
  public userListHeaders!: string[];
  public demoDate = new Date();

  public stateOrder = StateOrder;
  
  private count = 0;
  // private subNumVersion: Subscription;

  constructor(private ordersService: OrdersService, private versionService: VersionService) { 
    this.headers = ["TjmHt", "NbJours", "TVA", "Total HT", "Total TTC", "Type Presta", "Client", "State"];
    
    this.collection$ = this.ordersService.collection$;

    // this.ordersService.collection$.subscribe({
    //     next: (data) => { 
    //       console.log('Next : ', data);
    //       this.collection = data;
    //     },
    //     error: (err) => { console.error('Error : ', err)},
    //     complete: () => { console.info('Fin de transmission')}
    //   })
      
      // this.subNumVersion = this.versionService.numVersion$.subscribe(versionNum => console.warn("**** Num Version"))
      this.numVersion$ = this.versionService.numVersion$;
  }

  public total(val: number, coef: number, tva?: number): number {
    this.count++;
    console.warn(this.count);
    if(tva) {
      return val * coef * (1 + tva/100);
    } else {
      return val * coef;
    }
  }
  

  ngOnInit(): void {
  }

  public onChangeState(order: Order, event: any): void {
    this.ordersService.changeState(order, event.target.value).subscribe(
      (data: Order) => {
        order.state = data.state;
      }
    )
  }

  ngOnDestroy(): void {
    console.log('Instance detruite + desinscription');
    // this.subNumVersion.unsubscribe();
  }
}
