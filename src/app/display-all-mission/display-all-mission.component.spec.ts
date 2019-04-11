import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllMissionComponent } from './display-all-mission.component';

describe('DisplayAllMissionComponent', () => {
  let component: DisplayAllMissionComponent;
  let fixture: ComponentFixture<DisplayAllMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
