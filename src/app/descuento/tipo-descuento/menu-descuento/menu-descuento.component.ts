import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-descuento',
  templateUrl: './menu-descuento.component.html',
//styleUrls: ['./menu-descuento.component.css']
})
export class MenuDescuentoComponent implements OnInit {
  @Input() codigo: number;
  constructor() { }

  ngOnInit() {
  }

}
