import { Component, OnInit, Input } from '@angular/core';

import { Recepie } from '../recepie';


@Component({
  selector: 'rb-recepie-item',
  templateUrl: './recepie-item.component.html',
  styles: []
})

export class RecepieItemComponent implements OnInit {
	@Input() recepie: Recepie;
	recepieId: number; 

  constructor() { }

  ngOnInit() {
  }

}
