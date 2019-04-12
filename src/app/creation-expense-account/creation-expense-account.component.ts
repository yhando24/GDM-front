import { Component, OnInit } from '@angular/core';
import { ExpenseAccount, Mission } from '../models';
import { ExpenseAccountService } from 'src/services/expense-account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { MissionService } from 'src/services/mission.service';

@Component({
  selector: 'app-creation-expense-account',
  templateUrl: './creation-expense-account.component.html',
  styleUrls: ['./creation-expense-account.component.css']
})
export class CreationExpenseAccountComponent implements OnInit {

  error: string;
  newExpenseAccount: ExpenseAccount = {};
  mission: Mission;

  constructor(private data: MissionService, private route: ActivatedRoute, private expenseAccountService: ExpenseAccountService, private router: Router) { }
  URL_BACKEND = environment.backendUrl + 'users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  ngOnInit() {
    this.route.data.subscribe(({ mission }) => {
      setTimeout(() => {
        this.mission = mission;
      }, 0);
    });
  }


  submit() {
    this.newExpenseAccount.mission = this.mission;
    console.log(this.newExpenseAccount);
    this.expenseAccountService.createExpenseAccount(this.newExpenseAccount).subscribe(
      value => this.router.navigateByUrl('expense-accounts'),
      error => this.error = error
    );
    console.log("pas yo");
  }


  cancel() {
    this.router.navigateByUrl('expense-accounts');
  }

}
