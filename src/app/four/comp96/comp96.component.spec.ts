import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp96Component } from './comp96.component';

describe('Comp96Component', () => {
  let component: Comp96Component;
  let fixture: ComponentFixture<Comp96Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp96Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
