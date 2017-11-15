import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp30Component } from './comp30.component';

describe('Comp30Component', () => {
  let component: Comp30Component;
  let fixture: ComponentFixture<Comp30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
