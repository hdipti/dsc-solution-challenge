import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFinderComponent } from './team-finder.component';

describe('TeamFinderComponent', () => {
  let component: TeamFinderComponent;
  let fixture: ComponentFixture<TeamFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
