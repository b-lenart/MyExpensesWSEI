import { Injectable } from '@angular/core';
import { ExpenseDetail } from './expense-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseDetailService {

  formData: ExpenseDetail;
  readonly rootURL = 'http://localhost:61483/api';
  list: ExpenseDetail[];

  constructor(private http: HttpClient) { }

  postExpenseDetail() {
    return this.http.post(this.rootURL + '/ExpenseDetail', this.formData);
  }
  putExpenseDetail(transaction) {
    return this.http.put(this.rootURL + '/ExpenseDetail/' + transaction.expenseId, transaction);
  }
  deleteExpenseDetail(id) {
    return this.http.delete(this.rootURL + '/ExpenseDetail/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/ExpenseDetail')
    .subscribe(res => this.list = res as ExpenseDetail[]);
  }
}
