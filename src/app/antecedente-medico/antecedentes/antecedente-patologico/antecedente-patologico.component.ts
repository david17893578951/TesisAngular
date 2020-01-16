import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-antecedente-patologico',
  templateUrl: './antecedente-patologico.component.html',
  styleUrls: ['./antecedente-patologico.component.css']
})
export class AntecedentePatologicoComponent implements OnInit {
@Input() codigo: number;
  constructor() { }

  ngOnInit() {
  }

}
