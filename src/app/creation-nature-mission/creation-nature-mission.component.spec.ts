import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationNatureMissionComponent } from './creation-nature-mission.component';

describe('CreationNatureMissionComponent', () => {
  let component: CreationNatureMissionComponent;
  let fixture: ComponentFixture<CreationNatureMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationNatureMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationNatureMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
