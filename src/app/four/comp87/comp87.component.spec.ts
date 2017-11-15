import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp87Component } from './comp87.component';

describe('Comp87Component', () => {
  let component: Comp87Component;
  let fixture: ComponentFixture<Comp87Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp87Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
