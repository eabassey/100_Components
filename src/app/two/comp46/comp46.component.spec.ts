import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp46Component } from './comp46.component';

describe('Comp46Component', () => {
  let component: Comp46Component;
  let fixture: ComponentFixture<Comp46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
