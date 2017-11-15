import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp99Component } from './comp99.component';

describe('Comp99Component', () => {
  let component: Comp99Component;
  let fixture: ComponentFixture<Comp99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
