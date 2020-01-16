import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PersonaService, SriService } from "app/providers";
import { Persona, Sri } from "app/models";
import { AlertasService } from "app/core/service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  //styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public cad: any;
  public id: number;
  public persona: any;
  public personasri: any;
  constructor(private alertaService: AlertasService,
    public httpPersona: PersonaService,
    private router: Router,
    private routeurl: ActivatedRoute,
    public httpSri: SriService) { }

  ngOnInit() {
    this.routeurl.params.subscribe(params => {
      this.id = params['id'];
    });

    this.persona = new Persona();
    this.personasri = new Sri();

    this.getPersonaId(this.id)

  }

  public getPersonaId(id) {
    if (id != null) {
      this.httpPersona.getPersona(id).subscribe(recibes => {
        this.persona = recibes;
        console.log(recibes);
      });
    }
  }

  public getPersonaNuevo(p) {
    if (p != null) {
      this.cad = p;
      var total = 0;
      var longitud = this.cad.length;
      var longcheck = longitud - 1;
      if (this.cad !== "" && longitud === 10) {
        for (let i = 0; i < longcheck; i++) {
          if (i % 2 === 0) {
            var aux = this.cad.charAt(i) * 2;
            if (aux > 9) aux -= 9;
            total += aux;
          } else {
            total += parseInt(this.cad.charAt(i)); // parseInt o concatenará en lugar de sumar
          }
        }
        total = total % 10 ? 10 - total % 10 : 0;
        if (this.cad.charAt(longitud - 1) == total) {
          this.alertaService.mostrarAlertaInfo("Cédula", "Correctamente Ingresada");
          this.httpSri.getPersona(p).subscribe(recibes => {
            this.personasri = recibes;
            console.log("Busqueda persona al Sri");
            for (var index = 0; index < this.personasri.length; index++) {
              this.personasri = this.personasri[0];
            }
          });
        } else {
          this.alertaService.mostrarAlertaWarning("Cédula Incorrecta", "Ingrese una Cédula Válida");
        }
      }
      if (this.cad.length != 10) {
        this.alertaService.mostrarAlertaWarning("Cédula Incorrecta", "Ingrese una Cédula Válida");
      }
    }
  }

  public addOrUpdate(valid) {
    if (!valid) return;
    if (this.id != null) {
    console.log(this.persona);
    
      this.httpPersona.editPersona(this.persona).subscribe(personal => {
        this.alertaService.mostrarAlertaInfoGeneric();
        this.router.navigate(['registrofisioterapia/fisioterapia/' + this.id])
      });
    } else {
      console.log(this.personasri.usuario);
      this.persona.cedula = this.personasri.usuario;
      this.persona.nombre = this.personasri.nombre;
      this.persona.apellido = this.personasri.contrasena;
      this.httpPersona.insertPersona(this.persona).subscribe(personal => {
        this.persona = personal
        this.alertaService.mostrarAlertaInfoGeneric();
        this.router.navigate(['registrofisioterapia/fisioterapia/' + this.persona.id])
      });
    }
  }

  black() {
    this.router.navigate(['registrofisioterapia'])
  }

  ir() {
    this.router.navigate(['registrofisioterapia/fisioterapia/' + this.id])
  }

public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Persona.getValidators()
    };
  }


}
