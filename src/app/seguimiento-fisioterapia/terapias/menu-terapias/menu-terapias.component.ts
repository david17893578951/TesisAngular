import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-terapias',
  templateUrl: './menu-terapias.component.html',
 // styleUrls: ['./menu-terapias.component.css']
})
export class MenuTerapiasComponent implements OnInit {
@Input() codigo: number;
  constructor() { }

  ngOnInit() {
  
    
  }

}
