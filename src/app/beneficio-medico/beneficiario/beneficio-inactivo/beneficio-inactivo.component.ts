import { Component, OnInit, Input } from '@angular/core';
import { configVariables } from "app/shared/variables.config";
import { CatalogoService, BeneficioService } from "app/providers";

@Component({
  selector: 'app-beneficio-inactivo',
  templateUrl: './beneficio-inactivo.component.html',
  //styleUrls: ['./beneficio-inactivo.component.css']
})
export class BeneficioInactivoComponent implements OnInit {
  @Input() codigo: number;
  public beneficios: any;
  public beneficioinactivo: any;
  public catalogos: any;
  public show: boolean;
  public showCatalago: boolean;

  constructor(private httpBeneficio: BeneficioService,
    private httpCatalogo: CatalogoService) { }

  ngOnInit() {
    this.getBeneficio(this.codigo);
    this.findAllCatalogo();
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

  public getBeneficio(id) {
    if (id != null) {
      this.show = true;
      this.httpBeneficio.getBeneficiosPersona(id).subscribe(recibe => {
        this.beneficios = recibe;
        this.beneficioinactivo = this.getActivos(configVariables.APIVariable.Beneficio.inactivo);
//console.log(this.beneficios);
        this.show = false;
      });
    }
  }
  public getActivos(codigo: string) {
    return this.beneficios.filter(cat => cat.estado === codigo);
  }

}
