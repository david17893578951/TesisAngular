import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioActivoComponent } from './beneficio-activo.component';

describe('BeneficioActivoComponent', () => {
  let component: BeneficioActivoComponent;
  let fixture: ComponentFixture<BeneficioActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficioActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
