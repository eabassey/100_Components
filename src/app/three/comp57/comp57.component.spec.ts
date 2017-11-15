import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp57Component } from './comp57.component';

describe('Comp57Component', () => {
  let component: Comp57Component;
  let fixture: ComponentFixture<Comp57Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp57Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
