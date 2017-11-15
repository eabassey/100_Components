import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp35Component } from './comp35.component';

describe('Comp35Component', () => {
  let component: Comp35Component;
  let fixture: ComponentFixture<Comp35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
