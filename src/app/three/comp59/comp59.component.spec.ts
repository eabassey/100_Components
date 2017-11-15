import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp59Component } from './comp59.component';

describe('Comp59Component', () => {
  let component: Comp59Component;
  let fixture: ComponentFixture<Comp59Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp59Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
