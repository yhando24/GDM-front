import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpenseAccountComponent } from './list-expense-account.component';

describe('ListExpenseAccountComponent', () => {
  let component: ListExpenseAccountComponent;
  let fixture: ComponentFixture<ListExpenseAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExpenseAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpenseAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
