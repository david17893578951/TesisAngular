import { Component, OnInit } from '@angular/core';
import { AlertasService } from "app/core/service";
import { Router } from "@angular/router";
import { CatalogoService, PersonaService } from "app/providers";
@Component({
  selector: 'app-seguimiento-fisioterapia',
  templateUrl: './seguimiento-fisioterapia.component.html',
  //styleUrls: ['./seguimiento-fisioterapia.component.css']
})
export class SeguimientoFisioterapiaComponent implements OnInit {
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