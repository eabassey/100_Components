import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp55Component } from './comp55.component';

describe('Comp55Component', () => {
  let component: Comp55Component;
  let fixture: ComponentFixture<Comp55Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp55Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
