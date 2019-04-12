import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpenseAccount } from 'src/app/models';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class ExpenseAccountService {

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  private expenseAccountt: ExpenseAccount;
  private expenseAccount = new BehaviorSubject<ExpenseAccount>(null);
  public checkexpenseAccount = new BehaviorSubject<string[]>(null);

  get oneExpenseAccount(): Observable<ExpenseAccount> {
    return this.expenseAccount.asObservable();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  expenseAccountDeleted(expenseAccount: ExpenseAccount) {
    this.checkexpenseAccount.next(['success', `la note de frais ${expenseAccount.id}
    à bien été supprimée`]);
  }

  expenseAccountNotDeleted(message: string) {
    this.checkexpenseAccount.next(['danger', message]);
  }

  expenseAccountUpdated(expenseAccount: ExpenseAccount) {
    this.checkexpenseAccount.next(['success', `la nature ${expenseAccount.id}
    à bien été modifiée`]);
  }

  ajoutExpenseAccount(expenseAccount: ExpenseAccount) {
    this.expenseAccount.next(expenseAccount);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  createExpenseAccount(newExpenseAccount: ExpenseAccount): Observable<ExpenseAccount> {
    return this.http.post<ExpenseAccount>(URL_BACKEND + 'expense-accounts', newExpenseAccount,
      this.httpOptions);
  }

  findAllExpenseAccount(): Observable<ExpenseAccount[]> {
    return this.http.get<ExpenseAccount[]>(URL_BACKEND + 'expense-accounts');
  }

  findAllExpenseAccountByMission(id: number): Observable<ExpenseAccount[]> {
    return this.http.get<ExpenseAccount[]>(URL_BACKEND + 'expense-accounts/' + id);
  }

  getById(id: number): Observable<ExpenseAccount> {
    return this.http.get<ExpenseAccount>(URL_BACKEND + 'expense-accounts');
  }

  updateExpenseAccount(expenseAccount: ExpenseAccount): Observable<ExpenseAccount> {
    console.log(expenseAccount);
    return this.http.patch<ExpenseAccount>(URL_BACKEND + 'expense-accounts', expenseAccount, this.httpOptions);
  }

  deleteExpenseAccount(id: number): Observable<void> {
    console.log(id);
    return this.http.delete<void>(URL_BACKEND + 'expense-accounts/delete-expense-account/' + id, this.httpOptions);
  }

  getExpenseAccount(): ExpenseAccount {
    return this.expenseAccountt;
  }

  addExpenseAccount(expenseAccountt: ExpenseAccount) {
    this.expenseAccountt = expenseAccountt;
  }

}

