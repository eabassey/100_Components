import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp28Component } from './comp28.component';

describe('Comp28Component', () => {
  let component: Comp28Component;
  let fixture: ComponentFixture<Comp28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
