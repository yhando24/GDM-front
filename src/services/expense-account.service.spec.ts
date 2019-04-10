import { TestBed } from '@angular/core/testing';

import { ExpenseAccountService } from './expense-account.service';

describe('ExpenseAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpenseAccountService = TestBed.get(ExpenseAccountService);
    expect(service).toBeTruthy();
  });
});
