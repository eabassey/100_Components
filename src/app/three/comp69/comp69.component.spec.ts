import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp69Component } from './comp69.component';

describe('Comp69Component', () => {
  let component: Comp69Component;
  let fixture: ComponentFixture<Comp69Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp69Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
