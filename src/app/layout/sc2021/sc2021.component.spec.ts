import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc2021Component } from './sc2021.component';

describe('Sc2021Component', () => {
  let component: Sc2021Component;
  let fixture: ComponentFixture<Sc2021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sc2021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sc2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
