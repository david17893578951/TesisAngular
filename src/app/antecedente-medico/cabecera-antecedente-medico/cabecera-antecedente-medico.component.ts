import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cabecera-antecedente-medico',
  templateUrl: './cabecera-antecedente-medico.component.html',
  styleUrls: ['./cabecera-antecedente-medico.component.css']
})
export class CabeceraAntecedenteMedicoComponent implements OnInit {
 public id: number;
  constructor(private router: Router, private routeurl: ActivatedRoute,) { }

  ngOnInit() {
    this.routeurl.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}
