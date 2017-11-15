import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp29Component } from './comp29.component';

describe('Comp29Component', () => {
  let component: Comp29Component;
  let fixture: ComponentFixture<Comp29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
