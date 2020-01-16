import { Component, OnInit } from '@angular/core';
import { PacienteService, PersonaService } from "app/providers";
import { Persona, Paciente } from "app/models";

@Component({
  selector: 'app-antecedente-medico',
  templateUrl: './antecedente-medico.component.html',
  styleUrls: ['./antecedente-medico.component.css']
})
export class AntecedenteMedicoComponent implements OnInit {
  public show: boolean;
  public pacientes: any;
  
  constructor(public httpPaciente: PacienteService) { }

  ngOnInit() {
    this.getPacientes();
  }

  public getPacientes() {
    this.show = true;
    this.httpPaciente.getAllPaciente().subscribe(recibe => {
      this.pacientes = recibe;
      this.show = false;
    });
  }
  


}
