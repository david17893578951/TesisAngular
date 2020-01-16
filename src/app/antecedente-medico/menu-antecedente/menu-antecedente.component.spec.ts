import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAntecedenteComponent } from './menu-antecedente.component';

describe('MenuAntecedenteComponent', () => {
  let component: MenuAntecedenteComponent;
  let fixture: ComponentFixture<MenuAntecedenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAntecedenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAntecedenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
