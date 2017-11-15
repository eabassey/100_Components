import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp39Component } from './comp39.component';

describe('Comp39Component', () => {
  let component: Comp39Component;
  let fixture: ComponentFixture<Comp39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
