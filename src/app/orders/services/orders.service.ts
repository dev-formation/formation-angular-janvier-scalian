import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    console.log('init service');
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);
   }

}


// class User {
//   name: string;
//   lastName: string;
//   id: number;
//   constructor(nameParam: string, lastNameParam: string, idParam: number) {
//     this.name = nameParam;
//     this.lastName = lastNameParam;
//     this.id = idParam;
//   }
// }

// class LazyUser {
//   constructor(
//     public name: string,
//     public lastName: string,
//     public id: number) {}
// }

// new User('Chuck', 'Norris', 1);
// new LazyUser('Chuck', 'Norris', 1);