import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tipo-descuento',
  templateUrl: './tipo-descuento.component.html',
  //styleUrls: ['./tipo-descuento.component.css']
})
export class TipoDescuentoComponent implements OnInit {
public id:number;
  constructor(private router: Router,
    private routeurl: ActivatedRoute) { }

  ngOnInit() {
    this.routeurl.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  public black() {
    this.router.navigate(['descuento'])
  }


}
