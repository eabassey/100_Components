import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp42Component } from './comp42.component';

describe('Comp42Component', () => {
  let component: Comp42Component;
  let fixture: ComponentFixture<Comp42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
