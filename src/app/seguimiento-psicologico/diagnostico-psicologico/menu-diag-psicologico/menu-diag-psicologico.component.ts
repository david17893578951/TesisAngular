import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-diag-psicologico',
  templateUrl: './menu-diag-psicologico.component.html',
  //styleUrls: ['./menu-diag-psicologico.component.css']
})
export class MenuDiagPsicologicoComponent implements OnInit {
@Input() codigo: number;
  constructor() { }

  ngOnInit() {
  }

}
