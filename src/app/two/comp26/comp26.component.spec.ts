import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp26Component } from './comp26.component';

describe('Comp26Component', () => {
  let component: Comp26Component;
  let fixture: ComponentFixture<Comp26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
