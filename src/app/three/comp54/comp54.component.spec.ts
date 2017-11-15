import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp54Component } from './comp54.component';

describe('Comp54Component', () => {
  let component: Comp54Component;
  let fixture: ComponentFixture<Comp54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp54Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
