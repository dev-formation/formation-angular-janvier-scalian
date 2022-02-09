import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit, OnChanges, OnDestroy {
  // @Input() public title!: { titleParent: string };
  // Exercice change detection objet

  @Input() public title!: string;

  constructor() {
    // this.title = 'Le titre est ici'
    console.log('Composant TemplateFullWidth instancié');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Un changement d\'@Input() a été detecté', changes);
  }
  
  ngDoCheck(): void {
    console.log('Un changement a été rattrapé');
  }

  
  ngOnInit(): void {
    console.log('Composant TemplateFullWidth initialisé');
  }

  ngOnDestroy(): void {
    console.log('Composant TemplateFullWidth detruit');
  }
}
