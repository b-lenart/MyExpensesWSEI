import { Component, OnInit } from '@angular/core';
import { ExpenseDetail } from 'src/app/shared/expense-detail.model';
import { ExpenseDetailService } from 'src/app/shared/expense-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-expense-detail-list',
  templateUrl: './expense-detail-list.component.html',
  styleUrls: ['./expense-detail-list.component.scss']
})
export class ExpenseDetailListComponent implements OnInit {

  public transactionToEdit;
  public isModalVisible = false;
  constructor(public service: ExpenseDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: ExpenseDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(expenseId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteExpenseDetail(expenseId)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.success('Deleted successfully', 'Expense Detail Register');
        },
          err => {
            console.log(err);
          });
    }
  }

  onEdit(transaction) {
    this.transactionToEdit = { ...transaction };
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
