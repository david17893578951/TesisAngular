import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDescuentoComponent } from './tipo-descuento.component';

describe('TipoDescuentoComponent', () => {
  let component: TipoDescuentoComponent;
  let fixture: ComponentFixture<TipoDescuentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDescuentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
