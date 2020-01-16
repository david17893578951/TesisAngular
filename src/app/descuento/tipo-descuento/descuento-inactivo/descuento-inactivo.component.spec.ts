import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentoInactivoComponent } from './descuento-inactivo.component';

describe('DescuentoInactivoComponent', () => {
  let component: DescuentoInactivoComponent;
  let fixture: ComponentFixture<DescuentoInactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescuentoInactivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentoInactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
