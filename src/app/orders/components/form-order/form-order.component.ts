import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  public states = StateOrder;
  @Input() init!: Order;
  public form!:FormGroup;
  @Output() submitted = new EventEmitter<Order>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // V1 à la manière de la doc
    // this.form = new FormGroup({
    //   tjmHt: new FormControl(this.init.tjmHt),
    //   type: new FormControl(this.init.typePresta),
    //   nbJours: new FormControl(this.init.nbJours),
    //   client: new FormControl(this.init.client),
    //   tva: new FormControl(this.init.tva),
    //   state: new FormControl(this.init.state),
    //   comment: new FormControl(this.init.comment)
    // });

    // manière concise
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      typePresta: [this.init.typePresta],
      nbJours: [this.init.nbJours],
      client: [this.init.client],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment]
    })
  }

  public onSubmit(): void {
    console.log("Formulaire : ", this.form);
    console.log("Formulaire a été soumis : ", this.form.value);

    this.submitted.emit(this.form.value);
  }  

}
