import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDescuentoComponent } from './menu-descuento.component';

describe('MenuDescuentoComponent', () => {
  let component: MenuDescuentoComponent;
  let fixture: ComponentFixture<MenuDescuentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDescuentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
