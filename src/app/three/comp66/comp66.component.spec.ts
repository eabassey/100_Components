import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp66Component } from './comp66.component';

describe('Comp66Component', () => {
  let component: Comp66Component;
  let fixture: ComponentFixture<Comp66Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp66Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
