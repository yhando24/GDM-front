import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNatureMissionComponent } from './update-nature-mission.component';

describe('UpdateNatureMissionComponent', () => {
  let component: UpdateNatureMissionComponent;
  let fixture: ComponentFixture<UpdateNatureMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNatureMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNatureMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
