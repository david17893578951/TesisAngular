import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBeneficioInactivoComponent } from './tipo-beneficio-inactivo.component';

describe('TipoBeneficioInactivoComponent', () => {
  let component: TipoBeneficioInactivoComponent;
  let fixture: ComponentFixture<TipoBeneficioInactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBeneficioInactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBeneficioInactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
