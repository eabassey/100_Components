import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp37Component } from './comp37.component';

describe('Comp37Component', () => {
  let component: Comp37Component;
  let fixture: ComponentFixture<Comp37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
