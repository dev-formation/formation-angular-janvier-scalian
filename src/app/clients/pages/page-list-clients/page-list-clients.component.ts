import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  constructor() { 
    console.log('Composant list client instancié !');
  }
  
  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    console.log('Composant list client detruit ...');
  }

}
