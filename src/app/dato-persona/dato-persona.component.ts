import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PersonaService } from "app/providers";
import { Persona } from "app/models";


@Component({
  selector: 'app-dato-persona',
  templateUrl: './dato-persona.component.html',
  //styleUrls: ['./dato-persona.component.css']
})
export class DatoPersonaComponent implements OnInit {
public id: number;
  public persona: any;
  public show: boolean;
  @Input() codigo: number;
  
   constructor(public httpPersona: PersonaService,
    private router: Router,
    private routeurl: ActivatedRoute) { }

  ngOnInit() {
  
    this.persona = new Persona();
    this.getOneAsignacion(this.codigo);
  }
  public getOneAsignacion(id) {
    if (id != null) {
      this.show = true;
      this.httpPersona.getPersona(id).subscribe(recibe => {
        this.persona = recibe;
        this.show = false;
      });
    }
  }



}
