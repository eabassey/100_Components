import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp78Component } from './comp78.component';

describe('Comp78Component', () => {
  let component: Comp78Component;
  let fixture: ComponentFixture<Comp78Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp78Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
