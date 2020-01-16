import { Component, OnInit } from '@angular/core';
import { CatalogoService, PersonaService } from "app/providers";

@Component({
  selector: 'app-seguimiento-psicologico',
  templateUrl: './seguimiento-psicologico.component.html',
 // styleUrls: ['./seguimiento-psicologico.component.css']
})
export class SeguimientoPsicologicoComponent implements OnInit {
public personas: any;
  public cargarpersonas: boolean;
  constructor(public httpPersona: PersonaService,
  ) { }

  ngOnInit() {
    this.getAllPersonas();
  }
  public getAllPersonas() {
    this.cargarpersonas = true;
    this.httpPersona.getAllPersonas().subscribe(recibe => {
      this.personas = recibe
      this.cargarpersonas = false;
    });
  }
}
