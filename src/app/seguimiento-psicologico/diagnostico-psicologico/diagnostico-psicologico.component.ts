import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-diagnostico-psicologico',
  templateUrl: './diagnostico-psicologico.component.html',
  //styleUrls: ['./diagnostico-psicologico.component.css']
})
export class DiagnosticoPsicologicoComponent implements OnInit {

public id: number
  constructor(private routeurl: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.routeurl.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  black() {
    this.router.navigate(['seguimientopsicologico'])
  }


}
