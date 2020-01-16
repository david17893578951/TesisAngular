import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user/user.service';
import { DatoPersonaModule } from "app/beneficio-medico/beneficiario/dato-persona/dato-persona.module";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
