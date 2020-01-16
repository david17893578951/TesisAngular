import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { Subject } from "rxjs/Subject";
import { forceFillColumnWidths } from '@swimlane/ngx-datatable/release/utils';
import { forEach } from '@angular/router/src/utils/collection';
import { CalendarioService } from "app/providers";

@Injectable()
export class EventsService {

  public empleadosVale: any = [];
  public cal: any = [];
  public store: any = {
    events: this.cal,

    removeAfterDrop: false,
  };

  private subject;

  constructor(private httpCalendarioService: CalendarioService) {
    this.subject = new Subject();
    this.cargarEmpleadosPorVale();

  }
  cargarEmpleadosPorVale() {
    this.httpCalendarioService.getAllCalendario().subscribe(datos => {
      this.empleadosVale = datos;
     
      this.empleadosVale.forEach(empleado => {
       
        this.cal.push({
          "id": empleado.id,
          "title": empleado.descripcion,
          "start": moment(empleado.fechaInicio, "YYYY-MM-DD"),
          "allDay": false,
          "className": ["event", "bg-color-greenLight"]

        });

      })

    });

    console.log(this.cal);
  }
  subscribe(next, error?, complete?) {
    return this.subject.subscribe(next, error, complete)
  }

  addEvent(event) {
    const dropId = event.id;
    event.id = this.generateId();
    this.store.events.push(event);

    if (this.store.removeAfterDrop) {
      this.store.externalEvents.splice(this.store.externalEvents.findIndex(it => it.id == dropId), 1);
    }

    this.subject.next(this.store);
  }

  addExternalEvent(event) {
    this.store.externalEvents.push(event)
    this.subject.next(this.store)
  }

  setRemoveAfterDrop(value) {
    this.store.removeAfterDrop = value;
    this.subject.next(this.store);
  }


  generateId() {
    return Math.random().toString(36).slice(2)
  }
}
