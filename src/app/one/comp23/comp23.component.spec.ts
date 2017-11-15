import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp23Component } from './comp23.component';

describe('Comp23Component', () => {
  let component: Comp23Component;
  let fixture: ComponentFixture<Comp23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
