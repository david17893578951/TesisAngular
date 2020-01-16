import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-terapias',
  templateUrl: './terapias.component.html',
  //styleUrls: ['./terapias.component.css']
})
export class TerapiasComponent implements OnInit {
  public id: number
  constructor(private routeurl: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.routeurl.params.subscribe(params => {
      this.id = params['id'];
    });
   
    
  }

  black() {
    this.router.navigate(['seguimientofisioterapia'])
  }

}
