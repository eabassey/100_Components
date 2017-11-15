import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp70Component } from './comp70.component';

describe('Comp70Component', () => {
  let component: Comp70Component;
  let fixture: ComponentFixture<Comp70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
