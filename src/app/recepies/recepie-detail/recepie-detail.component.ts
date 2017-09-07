import { Component, OnInit, Input } from '@angular/core';

import { Recepie } from '../recepie';

@Component({
  selector: 'rb-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styles: []
})
export class RecepieDetailComponent implements OnInit {

	@Input() selectedRecepie: Recepie;

  constructor() { }

  ngOnInit() {
  }

}
