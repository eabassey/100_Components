import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp21Component } from './comp21.component';

describe('Comp21Component', () => {
  let component: Comp21Component;
  let fixture: ComponentFixture<Comp21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
