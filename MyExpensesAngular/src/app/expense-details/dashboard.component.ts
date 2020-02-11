import { Component, OnInit } from '@angular/core';
import { ExpenseDetailService } from '../shared/expense-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: ExpenseDetailService, private router: Router) { }

  ngOnInit() {
    this.service.refreshList();
  }

  get accountBalance() {
    if (!!this.service.list) {
      let amount = 0;
      this.service.list.forEach(expense => {
        if (expense.transactionType === 'outcome') {
          amount -= expense.amount;
        } else {
          amount += expense.amount;
        }
      });
      return amount.toString();
    }
  }

  logout() {
    localStorage.removeItem('myExpensesToken');
    this.router.navigate(['/user/login']);
  }
}
