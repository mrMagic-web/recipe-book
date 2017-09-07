import { Component, OnInit } from '@angular/core';

import { Recepie } from "./recepie";

@Component({
  selector: 'rb-recepies',
  templateUrl: './recepies.component.html'
})
export class RecepiesComponent implements OnInit {

	selectedRecepie: Recepie;
  	constructor() { }

  	ngOnInit() {
  	}

}
