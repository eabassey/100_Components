import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp45Component } from './comp45.component';

describe('Comp45Component', () => {
  let component: Comp45Component;
  let fixture: ComponentFixture<Comp45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
