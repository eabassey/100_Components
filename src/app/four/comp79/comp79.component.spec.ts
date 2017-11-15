import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp79Component } from './comp79.component';

describe('Comp79Component', () => {
  let component: Comp79Component;
  let fixture: ComponentFixture<Comp79Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp79Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
