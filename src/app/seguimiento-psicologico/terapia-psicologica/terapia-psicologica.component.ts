import { Component, OnInit } from '@angular/core';
import { AlertasService } from "app/core/service";
import { PersonaService, CatalogoService } from "app/providers";
import { Router } from "@angular/router";

@Component({
  selector: 'app-terapia-psicologica',
  templateUrl: './terapia-psicologica.component.html',
  //styleUrls: ['./terapia-psicologica.component.css']
})
export class TerapiaPsicologicaComponent implements OnInit {

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
