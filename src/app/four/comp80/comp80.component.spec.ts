import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp80Component } from './comp80.component';

describe('Comp80Component', () => {
  let component: Comp80Component;
  let fixture: ComponentFixture<Comp80Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp80Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
