import { Component, OnInit, Input } from '@angular/core';
import { DescuentoService } from "app/descuento/services";
import { configVariables } from "app/shared/variables.config";
import { CatalogoService } from "app/providers";
import { AlertasService } from "app/core/service";

@Component({
  selector: 'app-descuento-inactivo',
  templateUrl: './descuento-inactivo.component.html',
 // styleUrls: ['./descuento-inactivo.component.css']
})
export class DescuentoInactivoComponent implements OnInit {
  @Input() codigo: number;
  public descuentos: any;
    public descuentoinactivo: any;

  public catalogos: any;
  public show: boolean;
  public showCatalago: boolean;
  constructor(private httpDescuento: DescuentoService, private httpCatalogo: CatalogoService, private alertaService: AlertasService) { }

  ngOnInit() {
    this.getDescuento(this.codigo);
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
  public getDescuento(id) {
    if (id != null) {
      this.show = true;
      this.httpDescuento.getDescuentoPersona(id).subscribe(recibe => {
        this.descuentos = recibe;
       
        this.descuentoinactivo = this.getActivos(configVariables.APIVariable.Descuento.inactivo);
        this.show = false;
      });
    }

  }
  public getActivos(codigo: string) {
    return this.descuentos.filter(cat => cat.estado === codigo);
  }


}
