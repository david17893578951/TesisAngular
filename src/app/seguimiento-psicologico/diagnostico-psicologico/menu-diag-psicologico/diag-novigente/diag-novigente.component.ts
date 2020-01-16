import { Component, OnInit, Input } from '@angular/core';
import { CatalogoService, SeguimientopsicologicoService } from "app/providers";
import { configVariables } from "app/shared/variables.config";

@Component({
  selector: 'app-diag-novigente',
  templateUrl: './diag-novigente.component.html',
  //styleUrls: ['./diag-novigente.component.css']
})
export class DiagNovigenteComponent implements OnInit {
  @Input() codigo: number;
  public catalogos: any;
  public show: boolean;
  public showCatalago: boolean;
  public terapias: any;
  public terapianovigente: any;
  constructor(
    private httpCatalogo: CatalogoService,
    public httpSeguimientopsicologicoService: SeguimientopsicologicoService, ) { }

  ngOnInit() {
    this.findAllCatalogo();
    this.getTerapia(this.codigo);
  }
  public getTerapia(id) {
    if (id != null) {
      this.show = true;
      this.httpSeguimientopsicologicoService.getSeguimientopsicologicoByPersona(id).subscribe(recibe => {
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
