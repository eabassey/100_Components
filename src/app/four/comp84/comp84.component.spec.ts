import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp84Component } from './comp84.component';

describe('Comp84Component', () => {
  let component: Comp84Component;
  let fixture: ComponentFixture<Comp84Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp84Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
