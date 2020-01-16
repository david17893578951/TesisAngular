import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoPersonaComponent } from './dato-persona.component';

describe('DatoPersonaComponent', () => {
  let component: DatoPersonaComponent;
  let fixture: ComponentFixture<DatoPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatoPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
