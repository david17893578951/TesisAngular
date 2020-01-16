import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioMedicoComponent } from './beneficio-medico.component';

describe('BeneficioMedicoComponent', () => {
  let component: BeneficioMedicoComponent;
  let fixture: ComponentFixture<BeneficioMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficioMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
