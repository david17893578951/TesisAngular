import { Component, OnInit } from '@angular/core';
import { AlertasService } from "app/core/service";
import { PersonaService, CatalogoService } from "app/providers";
import { Router } from "@angular/router";

@Component({
  selector: 'app-asistencia-fisioterapia',
  templateUrl: './asistencia-fisioterapia.component.html',
 // styleUrls: ['./asistencia-fisioterapia.component.css']
})
export class AsistenciaFisioterapiaComponent implements OnInit {

 public personas: any;
  public cargarpersonas: boolean;
  constructor(
    public alertService: AlertasService,
    public httpPersona: PersonaService,
    private router: Router,
    private httpCatalogo: CatalogoService
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
