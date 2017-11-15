import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp67Component } from './comp67.component';

describe('Comp67Component', () => {
  let component: Comp67Component;
  let fixture: ComponentFixture<Comp67Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp67Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
