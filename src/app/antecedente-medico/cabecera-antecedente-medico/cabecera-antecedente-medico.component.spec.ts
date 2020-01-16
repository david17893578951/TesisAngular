import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraAntecedenteMedicoComponent } from './cabecera-antecedente-medico.component';

describe('CabeceraAntecedenteMedicoComponent', () => {
  let component: CabeceraAntecedenteMedicoComponent;
  let fixture: ComponentFixture<CabeceraAntecedenteMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraAntecedenteMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraAntecedenteMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
