import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionUserComponent } from './connection-user.component';

describe('ConnectionUserComponent', () => {
  let component: ConnectionUserComponent;
  let fixture: ComponentFixture<ConnectionUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
