import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBeneficioComponent } from './menu-beneficio.component';

describe('MenuBeneficioComponent', () => {
  let component: MenuBeneficioComponent;
  let fixture: ComponentFixture<MenuBeneficioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBeneficioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
