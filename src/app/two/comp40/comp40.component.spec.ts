import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp40Component } from './comp40.component';

describe('Comp40Component', () => {
  let component: Comp40Component;
  let fixture: ComponentFixture<Comp40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
