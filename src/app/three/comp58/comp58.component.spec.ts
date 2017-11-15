import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp58Component } from './comp58.component';

describe('Comp58Component', () => {
  let component: Comp58Component;
  let fixture: ComponentFixture<Comp58Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp58Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
