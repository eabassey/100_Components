import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp86Component } from './comp86.component';

describe('Comp86Component', () => {
  let component: Comp86Component;
  let fixture: ComponentFixture<Comp86Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp86Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
