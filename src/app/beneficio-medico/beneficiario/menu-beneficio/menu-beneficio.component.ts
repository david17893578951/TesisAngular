import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-beneficio',
  templateUrl: './menu-beneficio.component.html',
  //styleUrls: ['./menu-beneficio.component.css']
})
export class MenuBeneficioComponent implements OnInit {
  @Input() codigo: number;
  constructor() { }
  ngOnInit() {
  }

 

}
