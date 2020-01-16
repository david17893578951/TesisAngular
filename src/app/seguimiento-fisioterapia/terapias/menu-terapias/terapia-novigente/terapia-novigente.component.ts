import { Component, OnInit, Input } from '@angular/core';
import { CatalogoService, RegistrofisioterapiaService } from "app/providers";
import { configVariables } from "app/shared/variables.config";

@Component({
  selector: 'app-terapia-novigente',
  templateUrl: './terapia-novigente.component.html',
  //styleUrls: ['./terapia-novigente.component.css']
})
export class TerapiaNovigenteComponent implements OnInit {
  @Input() codigo: number;
  public catalogos: any;
  public show: boolean;
  public showCatalago: boolean;
  public terapias: any;
  public terapianovigente: any;
  constructor(
    private httpCatalogo: CatalogoService,
    public httpRegistrofisioterapiaService: RegistrofisioterapiaService, ) { }

  ngOnInit() {
     this.findAllCatalogo();
    this.getTerapia(this.codigo);
  }
  public getTerapia(id) {
    if (id != null) {
      this.show = true;
      this.httpRegistrofisioterapiaService.getSeguimientofisioterapiaByPersona(id).subscribe(recibe => {
        this.terapias = recibe;
        this.terapianovigente = this.getActivos(configVariables.APIVariable.SeguimientoPsicologico.inactivo);
       // console.log(this.terapianovigente);
        this.show = false;
      });
    }
  }
  public getActivos(codigo: string) {
    return this.terapias.filter(cat => cat.estado === codigo);
  }
  public findAllCatalogo() {
    this.showCatalago = true;
    this.httpCatalogo.getAll().subscribe(recibe => {
      this.catalogos = recibe
      this.showCatalago = false;
    }
    )
  }

  public viewEstado(id) {
    let data = this.catalogos.find(acti => acti.id == id)
    if (data != null) {
      return data.nombre;
    }
  }
}


