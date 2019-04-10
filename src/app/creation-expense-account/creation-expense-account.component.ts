import { Component, OnInit } from '@angular/core';
import { ExpenseAccount } from '../models';
import { ExpenseAccountService } from 'src/services/expense-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-expense-account',
  templateUrl: './creation-expense-account.component.html',
  styleUrls: ['./creation-expense-account.component.css']
})
export class CreationExpenseAccountComponent implements OnInit {

  error: string;
  newExpenseAccount: ExpenseAccount = {};

  constructor(private expenseAccountService : ExpenseAccountService, private router: Router) { }

  ngOnInit() {
  }

  submit(){
    this.expenseAccountService.createExpenseAccount(this.newExpenseAccount).subscribe(
      value => this.router.navigateByUrl('expense-accounts'),
      error => this.error = error
    );
  }

  cancel(){
    this.router.navigateByUrl('expense-accounts');
  }

}
