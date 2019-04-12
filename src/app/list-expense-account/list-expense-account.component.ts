import { Component, OnInit } from '@angular/core';
import { ExpenseAccount, Mission } from '../models';
import { ExpenseAccountService } from 'src/services/expense-account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/services/modal.service';
import { MissionService } from 'src/services/mission.service';

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

  listExpenseAccount: ExpenseAccount[];
  oneExpenseAccount: ExpenseAccount;
  titreModal: string;
  messageModal: string;
  footerModal: string;
  closeResult: string;
  alert: Alert;
  oneMission: Mission = {};

  constructor(private datam: MissionService, private data: ExpenseAccountService, private route: Router, private modalService: ModalService, private actiroute: ActivatedRoute) { }

  newExpenseAccount() {
    this.route.navigate(['/createExpenseAccount/' + this.oneMission.id]);
  }

  ngOnInit() {
    this.actiroute.data.subscribe(({ mission }) => {
      setTimeout(() => {
        this.oneMission = mission,
          this.data
            .findAllExpenseAccountByMission(this.oneMission.id)
            .subscribe(arg => (this.listExpenseAccount = arg, console.log(this.listExpenseAccount)))
        console.log(this.oneMission)
          ;
      });
    });
    // this.idMission = Number(this.actiroute.snapshot.paramMap.get('idMission')),
    // this.datam.FindMissionById(this.idMission).subscribe(value => this.oneMission = value);
    this.alert = { type: '', message: '' };
    ;


    this.data.checkexpenseAccount.subscribe(message => {
      if (message !== null) {
        this.alert.message = message[1],
          this.alert.type = message[0];
      }
      setTimeout(() => {
        this.alert.message = '',
          this.alert.type = '';
      }, 2000);

    });
  }

  submit() {
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
