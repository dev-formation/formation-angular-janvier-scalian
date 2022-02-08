import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formation-angular-scalian';
  private testPrivate = 'Ceci n\'est pas accessible dans le template'; 

  constructor(private router: Router) {
    console.log("router : ", router.config);
  }
}
