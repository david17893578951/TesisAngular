import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficioInactivoComponent } from './beneficio-inactivo.component';

describe('BeneficioInactivoComponent', () => {
  let component: BeneficioInactivoComponent;
  let fixture: ComponentFixture<BeneficioInactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficioInactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficioInactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
