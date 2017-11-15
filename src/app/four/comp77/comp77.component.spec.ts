import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp77Component } from './comp77.component';

describe('Comp77Component', () => {
  let component: Comp77Component;
  let fixture: ComponentFixture<Comp77Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp77Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
