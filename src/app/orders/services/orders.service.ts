import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map(tabObj => {
        return tabObj.map(obj => {
          return new Order(obj)
        })
      })
    );
   }

  public update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${order.id}`, order);
  }

  public changeState(order: Order, state: StateOrder): Observable<Order> {
    const orderToUpdate = new Order({...order, state});
    return this.update(orderToUpdate);
  }

  public add(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, order);
  }

}
