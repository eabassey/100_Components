import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp32Component } from './comp32.component';

describe('Comp32Component', () => {
  let component: Comp32Component;
  let fixture: ComponentFixture<Comp32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
