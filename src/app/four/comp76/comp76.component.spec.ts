import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp76Component } from './comp76.component';

describe('Comp76Component', () => {
  let component: Comp76Component;
  let fixture: ComponentFixture<Comp76Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp76Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
