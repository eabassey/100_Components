import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp50Component } from './comp50.component';

describe('Comp50Component', () => {
  let component: Comp50Component;
  let fixture: ComponentFixture<Comp50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
