import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp27Component } from './comp27.component';

describe('Comp27Component', () => {
  let component: Comp27Component;
  let fixture: ComponentFixture<Comp27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
