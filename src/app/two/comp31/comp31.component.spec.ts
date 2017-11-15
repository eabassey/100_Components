import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp31Component } from './comp31.component';

describe('Comp31Component', () => {
  let component: Comp31Component;
  let fixture: ComponentFixture<Comp31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
