import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp41Component } from './comp41.component';

describe('Comp41Component', () => {
  let component: Comp41Component;
  let fixture: ComponentFixture<Comp41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
