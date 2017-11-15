import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp43Component } from './comp43.component';

describe('Comp43Component', () => {
  let component: Comp43Component;
  let fixture: ComponentFixture<Comp43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
