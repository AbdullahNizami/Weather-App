import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveform1Component } from './reactiveform1.component';

describe('Reactiveform1Component', () => {
  let component: Reactiveform1Component;
  let fixture: ComponentFixture<Reactiveform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactiveform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactiveform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
