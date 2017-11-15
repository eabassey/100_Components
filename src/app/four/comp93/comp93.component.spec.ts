import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp93Component } from './comp93.component';

describe('Comp93Component', () => {
  let component: Comp93Component;
  let fixture: ComponentFixture<Comp93Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp93Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
