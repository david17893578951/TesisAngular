import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-antecedente',
  templateUrl: './menu-antecedente.component.html',
  styleUrls: ['./menu-antecedente.component.css']
})
export class MenuAntecedenteComponent implements OnInit {
  @Input() codigo: number;
  constructor() { }

  ngOnInit() {
  }

}
