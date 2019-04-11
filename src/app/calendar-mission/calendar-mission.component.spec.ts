import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMissionComponent } from './calendar-mission.component';

describe('CalendarMissionComponent', () => {
  let component: CalendarMissionComponent;
  let fixture: ComponentFixture<CalendarMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
