import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayGetComponent } from './array-get.component';

describe('ArrayGetComponent', () => {
  let component: ArrayGetComponent;
  let fixture: ComponentFixture<ArrayGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
