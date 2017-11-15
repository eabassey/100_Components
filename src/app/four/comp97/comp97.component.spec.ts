import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp97Component } from './comp97.component';

describe('Comp97Component', () => {
  let component: Comp97Component;
  let fixture: ComponentFixture<Comp97Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp97Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
