import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormusercreateComponent } from './formusercreate.component';

describe('FormusercreateComponent', () => {
  let component: FormusercreateComponent;
  let fixture: ComponentFixture<FormusercreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormusercreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormusercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
