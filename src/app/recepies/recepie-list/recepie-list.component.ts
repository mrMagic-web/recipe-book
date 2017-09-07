import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepie';

@Component({
  selector: 'rb-recepie-list',
  templateUrl: './recepie-list.component.html',
  styles: []
})
export class RecepieListComponent implements OnInit {
	recepies: Recepie[] = [];
	@Output() recepieSelected = new EventEmitter<Recepie>();
	recepie = new Recepie('Dummy', 'dummy', 'https://images-na.ssl-images-amazon.com/images/I/21y7HdqcDHL._SY300_.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recepie: Recepie){
  	this.recepieSelected.emit(recepie);
  }
}
