import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss']
})
export class PageSignUpComponent implements OnInit {

  constructor() {
    console.log('Composant PageSignUp instancié');
   }

  ngOnInit(): void {
  }

}
