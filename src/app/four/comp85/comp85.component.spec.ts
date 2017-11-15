import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp85Component } from './comp85.component';

describe('Comp85Component', () => {
  let component: Comp85Component;
  let fixture: ComponentFixture<Comp85Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp85Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
