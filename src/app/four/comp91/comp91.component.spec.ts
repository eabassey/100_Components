import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp91Component } from './comp91.component';

describe('Comp91Component', () => {
  let component: Comp91Component;
  let fixture: ComponentFixture<Comp91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
