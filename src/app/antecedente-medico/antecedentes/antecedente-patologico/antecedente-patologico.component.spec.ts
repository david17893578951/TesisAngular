import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentePatologicoComponent } from './antecedente-patologico.component';

describe('AntecedentePatologicoComponent', () => {
  let component: AntecedentePatologicoComponent;
  let fixture: ComponentFixture<AntecedentePatologicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedentePatologicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedentePatologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
