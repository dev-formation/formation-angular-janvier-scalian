import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;

  /**
   * 
   * Observable froid
   */

  // private obs$ = new Observable((resp) => { resp.next(Math.random())});

  /**
   * 
   * Observable chaud
   */
  //Subject
  // private sub1$ = new Subject();
  
  // BehaviorSubject
  // private behav1$ = new BehaviorSubject('Vidéo youtube semaine 1');
  
  // Subscription
  // private subscription1!: Subscription;
  // private subscription2!: Subscription;

  constructor(private http: HttpClient) {
    console.log('init service');
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`);

    /**
     * Observer froid
     */
    // this.obs$.subscribe(resp => console.log('Observer obs froid 1', resp));
    // this.obs$.subscribe(resp => console.log('Observer obs froid 2', resp));

    /**
     * Observer chaud
     */
    // Subject
    // this.sub1$.next('Newletter mois de janvier');
    // console.log('Mon premier abonné à la fin de janvier');
    // this.sub1$.subscribe(resp => console.log('Observer 1 sub 1', resp));
    // this.sub1$.next('Newletter mois de fevrier');
    // console.log('Mon second abonné à la fin de fevrier');
    // this.sub1$.subscribe(resp => console.log('Observer 2 sub 1', resp));
    // this.sub1$.next('Newletter mois de mars');
    // this.sub1$.next('Newletter mois de mi mars');

    // BehaviorSubject
    // this.subscription1 = this.behav1$.subscribe(resp => console.log('Observer 1 behav 1', resp));
    // this.behav1$.next('Video youtube semaine 2');
    // this.subscription2 = this.behav1$.subscribe(resp => console.log('Observer 2 behav 1', resp));
    // this.behav1$.next('Video youtube semaine 3');
    // this.subscription1.unsubscribe();
    // this.behav1$.next('Video youtube semaine 4');


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