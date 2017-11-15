import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp82Component } from './comp82.component';

describe('Comp82Component', () => {
  let component: Comp82Component;
  let fixture: ComponentFixture<Comp82Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp82Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
