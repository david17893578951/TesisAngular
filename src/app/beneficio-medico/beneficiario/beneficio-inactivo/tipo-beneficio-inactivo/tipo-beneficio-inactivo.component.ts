import { Component, OnInit, Input } from '@angular/core';
import { configVariables } from "app/shared/variables.config";
import { CatalogoService, TipoBeneficioService } from "app/providers";
import { AlertasService } from "app/core/service";

@Component({
  selector: 'app-tipo-beneficio-inactivo',
  templateUrl: './tipo-beneficio-inactivo.component.html',
 // styleUrls: ['./tipo-beneficio-inactivo.component.css']
})
export class TipoBeneficioInactivoComponent implements OnInit {
  @Input() codigo: number;
  public tipos: any;
  public showCatalago: boolean;
  public catalogos: any;
  public show: boolean;
  public tipobeneficios: any;
  constructor(private httpTipoBeneficio: TipoBeneficioService, private httpCatalogo: CatalogoService, private alertaService: AlertasService) { }

  ngOnInit() {
    this.getTipoBeneficio(this.codigo)
    this.findAllCatalogo();
  }
  public findAllCatalogo() {
    this.showCatalago = true;
    this.httpCatalogo.getAll().subscribe(recibe => {
      this.catalogos = recibe
      this.tipos = this.getItems(configVariables.APIVariable.TipoBeneficio.tipo);
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
  public getItems(codigo: string) {
    return this.catalogos.filter(cat => cat.clavePadre === codigo)
  }

  public getTipoBeneficio(id) {
    if (id != null) {
      this.show = true;
      this.httpTipoBeneficio.getTipoBeneficiosPersona(id).subscribe(recibe => {
        this.tipobeneficios = recibe;
      

        this.show = false;
      });
    }
  }
}
