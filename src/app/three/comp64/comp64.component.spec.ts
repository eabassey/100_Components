import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp64Component } from './comp64.component';

describe('Comp64Component', () => {
  let component: Comp64Component;
  let fixture: ComponentFixture<Comp64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
