import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp38Component } from './comp38.component';

describe('Comp38Component', () => {
  let component: Comp38Component;
  let fixture: ComponentFixture<Comp38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
