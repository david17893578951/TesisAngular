import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentoActivoComponent } from './descuento-activo.component';

describe('DescuentoActivoComponent', () => {
  let component: DescuentoActivoComponent;
  let fixture: ComponentFixture<DescuentoActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescuentoActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentoActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
