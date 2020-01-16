import { Component, OnInit } from '@angular/core';
import { PacienteService, PersonaService, SriService } from "app/providers";
import { Persona, Paciente, Sri } from "app/models";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css']
})

export class NuevoPacienteComponent implements OnInit {
  public id: number;
  public paciente: any;
  public personasri: any;
  public persona: any;

  constructor(private router: Router, private routeurl: ActivatedRoute, public httpPaciente: PacienteService, public httpPersona: PersonaService, public httpSri: SriService) { }

  ngOnInit() {
    // this.editar = false;
    this.routeurl.params.subscribe(params => {
      this.id = params['id'];
    });


    this.personasri = new Sri();
    this.persona = new Persona();
    this.paciente = new Paciente();
    this.getPersonaSRI(this.id);
  }

  public getPersonaSRI(id) {
    if (id != null) {
      this.httpPaciente.getOnePacienteId(id).subscribe(recibese => {
        this.paciente = recibese;
        this.httpPersona.getPersona(this.paciente.fdiPersona.id).subscribe(recibes => {
          this.persona = recibes;

          console.log(this.persona);

        });

      });

    }
  }

  public getPersonaNuevo(p) {
    if (p != null) {
      this.httpSri.getPersona(p).subscribe(recibes => {
        this.personasri = recibes;
        //console.log("Busqueda persona al Sri");
        for (var index = 0; index < this.personasri.length; index++) {
          this.personasri = this.personasri[0];
        }
      });
    }
  }

  public addOrUpdate(valid) {
    if (!valid) return;
    if (this.id != null) {

      this.httpPersona.editPersona(this.persona).subscribe(personal => {
        // console.log(this.id);
      });
    } else {
      console.log(this.personasri.usuario);
      this.persona.cedula = this.personasri.usuario;
      this.persona.nombre = this.personasri.nombre;
      this.persona.apellido = this.personasri.contrasena;
      this.httpPersona.insertPersona(this.persona).subscribe(personal => {
        this.persona = personal
        this.paciente.fdiPersona = { id: this.persona.id }
        this.httpPaciente.insertPaciente(this.paciente).subscribe(paciente => {
          this.paciente = paciente
          //console.log(this.paciente.id);
        });
      });
    }
  }

  black() {
    this.router.navigate(['antecedentemedico'])
  }

  ir() {

    this.httpPaciente.getOnePaciente(this.persona.id).subscribe(recibes => {
      this.paciente = recibes;

      for (var index = 0; index < this.paciente.length; index++) {
        this.paciente = this.paciente[0];
        this.router.navigate(['antecedentemedico/cabecera/' + this.paciente.id])
      }
    });


  }


}