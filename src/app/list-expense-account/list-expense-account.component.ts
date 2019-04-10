import { Component, OnInit } from '@angular/core';
import { ExpenseAccount } from '../models';
import { ExpenseAccountService } from 'src/services/expense-account.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/services/modal.service';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-list-expense-account',
  templateUrl: './list-expense-account.component.html',
  styleUrls: ['./list-expense-account.component.css']
})
export class ListExpenseAccountComponent implements OnInit {

  listExpenseAccount;
  oneExpenseAccount: ExpenseAccount;
  titreModal: string;
  messageModal: string;
  footerModal: string;
  closeResult: string;
  alert: Alert;


  constructor(private data: ExpenseAccountService, private route: Router, private modalService: ModalService) { }

newExpenseAccount(){
  this.route.navigate(['/createExpenseAccount']);
}

  ngOnInit() {
    this.alert = { type: '', message: '' };
    this.data
      .findAllExpenseAccount()
      .subscribe(arg => (this.listExpenseAccount = arg));

    this.data.checkexpenseAccount.subscribe(message => {
      if (message !== null) {
        this.alert.message = message[1],
          this.alert.type = message[0];
      }
      setTimeout(() => {
        this.alert.message = '',
          this.alert.type = '';
      }, 2000);
      this.data
        .findAllExpenseAccount()
        .subscribe(arg => (this.listExpenseAccount = arg));
    });
  }

  submit(){
    this.data.updateExpenseAccount(this.oneExpenseAccount).subscribe(() => this.data.findAllExpenseAccount()
      .subscribe(arg => (this.listExpenseAccount = arg)),
      error => console.log(`l'update n'a pas eu lieu` + error.error));
  }

  delete(expenseAccount: ExpenseAccount) {
    console.log(expenseAccount);
    // this.modalService.dismissAll();
    this.data.deleteExpenseAccount(expenseAccount.id).subscribe();
  }

  openUpdate(expenseAccount: ExpenseAccount) {
    this.data.ajoutExpenseAccount(expenseAccount);
    this.modalService.openModal('updateExpenseAccount');

  }

  openDelete(expenseAccount: ExpenseAccount) {
    this.data.ajoutExpenseAccount(expenseAccount);
    this.modalService.openModal('deleteExpenseAccount');
  }

}
