import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationExpenseAccountComponent } from './creation-expense-account.component';

describe('CreationExpenseAccountComponent', () => {
  let component: CreationExpenseAccountComponent;
  let fixture: ComponentFixture<CreationExpenseAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationExpenseAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationExpenseAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
