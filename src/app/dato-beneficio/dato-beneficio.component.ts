import { Component, OnInit, Input } from '@angular/core';
import { BeneficioService, TipoBeneficioService, CatalogoService } from "app/providers";
import { configVariables } from "app/shared/variables.config";
import { Beneficio } from "app/models";
import { DescuentoService } from "app/descuento/services";

@Component({
  selector: 'app-dato-beneficio',
  templateUrl: './dato-beneficio.component.html',
  //  styleUrls: ['./dato-beneficio.component.css']
})
export class DatoBeneficioComponent implements OnInit {
  public show: boolean;
  public showCatalago: boolean;
  public beneficios: any;
  public beneficioactivo: any;
  public beneficioactivo1: any;
  public descuentos: any;
  public descuentoactivo: any;
  public catalogos: any;
  @Input() codigo: number;
  public tipobeneficios: any;
  constructor(public httpBeneficio: BeneficioService,
    private httpTipoBeneficio: TipoBeneficioService,
    private httpDescuento: DescuentoService,
    private httpCatalogo: CatalogoService
  ) { }

  ngOnInit() {
    this.beneficioactivo1 = new Beneficio();
    this.getBeneficio(this.codigo);
    this.getDescuento(this.codigo);
    this.findAllCatalogo();
  }

  public getDescuento(id) {
    if (id != null) {
      this.show = true;
      this.httpDescuento.getDescuentoPersona(id).subscribe(recibe => {
        this.descuentos = recibe;
        this.descuentoactivo = this.getActivoD(configVariables.APIVariable.Descuento.activo);
       
        this.show = false;
      });
    }
  }

  public getBeneficio(id) {
    if (id != null) {
      this.show = true;
      this.httpBeneficio.getBeneficiosPersona(id).subscribe(recibe => {
        this.beneficios = recibe;
        
        this.beneficioactivo = this.getActivos(configVariables.APIVariable.Beneficio.activo);

        for (var index = 0; index < this.beneficioactivo.length; index++) {
          this.beneficioactivo1 = this.beneficioactivo[0];

        }
       
        this.httpTipoBeneficio.getTipoBeneficiosPersona(this.beneficioactivo1.id).subscribe(recibe => {
          this.tipobeneficios = recibe;
        });


        this.show = false;
      });
    }
  }
  public getActivos(codigo: string) {
    return this.beneficios.filter(cat => cat.estado === codigo);
  }
    public getActivoD(codigo: string) {
    return this.descuentos.filter(cat => cat.estado === codigo);
  }
  public viewEstado(id) {
    let data = this.catalogos.find(acti => acti.id == id)
    if (data != null) {
      return data.nombre;
    }
  }
  public findAllCatalogo() {
    this.showCatalago = true;
    this.httpCatalogo.getAll().subscribe(recibe => {
      this.catalogos = recibe
      this.showCatalago = false;
    }
    )
  }

}
