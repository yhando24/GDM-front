import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveMissionComponent } from './approve-mission.component';

describe('ApproveMissionComponent', () => {
  let component: ApproveMissionComponent;
  let fixture: ComponentFixture<ApproveMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
