import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp56Component } from './comp56.component';

describe('Comp56Component', () => {
  let component: Comp56Component;
  let fixture: ComponentFixture<Comp56Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp56Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
