import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp62Component } from './comp62.component';

describe('Comp62Component', () => {
  let component: Comp62Component;
  let fixture: ComponentFixture<Comp62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
