import { Component, OnInit } from '@angular/core';
import { ExpenseDetailService } from 'src/app/shared/expense-detail.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public biggestTransaction;

  constructor(public service: ExpenseDetailService) { }

  ngOnInit() { }

  get getCategories() {
    if (!!this.service.list) {
      const sortedByCategory = this.service.list.reduce((sum, expense) => {
        if (expense.transactionType === 'income') {
          sum[expense.type] = (sum[expense.type] || 0) + expense.amount;
        } else {
          sum[expense.type] = (sum[expense.type] || 0) - expense.amount;
        }
        return sum;
      }, {});
      console.log(sortedByCategory);

      // var arr = Object.keys( sortedByCategory ).map(function ( key ) { return sortedByCategory[key]; });
      let arr = Object.values(sortedByCategory);
      console.log(arr);
      // let min = Math.min(...arr);
      // let max = Math.max(...arr);
      const absoluteNumbers = arr.map((v: number) => Math.abs(v));
      this.biggestTransaction = Math.max(...absoluteNumbers);
      console.log(this.biggestTransaction);
      return sortedByCategory;
    } else {
      return {};
    }
  }

  getAbsoluteValue(value: number) {
    return Math.abs(value);
  }
  //   let sortedByCategory = this.service.list.reduce((c, v) => {
  //     c[v.type] = (c[v.type] || 0) + v.amount;
  //     return c;
  //   }, {});
  //   console.log(sortedByCategory);
  //   return sortedByCategory;
  // }

}
