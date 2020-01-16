import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Persona } from "app/models";

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
 // styleUrls: ['./beneficiario.component.css']
})
export class BeneficiarioComponent implements OnInit {
  public id: number;
  public persona: any;
  public show: boolean;
  constructor(
    private router: Router,
    private routeurl: ActivatedRoute) { }

  ngOnInit() {
    this.routeurl.params.subscribe(params => {
      this.id = params['id'];

    });
    this.persona = new Persona();
    // this.getOneAsignacion(this.id);
  }

  /*public getOneAsignacion(id) {
    if (id != null) {
      this.show = true;
      this.httpPersona.getPersona(id).subscribe(recibe => {
        this.persona = recibe;
        console.log(this.persona);

        this.show = false;
      });
    }
  }*/

  public black() {
    this.router.navigate(['beneficiomedico'])
  }


}
