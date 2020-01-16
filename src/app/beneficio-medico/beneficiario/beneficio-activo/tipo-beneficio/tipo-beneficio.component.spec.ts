import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBeneficioComponent } from './tipo-beneficio.component';

describe('TipoBeneficioComponent', () => {
  let component: TipoBeneficioComponent;
  let fixture: ComponentFixture<TipoBeneficioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBeneficioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
