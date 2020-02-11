import { Component, OnInit } from '@angular/core';
import { ExpenseDetailService } from 'src/app/shared/expense-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class ExpenseDetailComponent implements OnInit {

  constructor(public service: ExpenseDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }

    this.service.formData = {
      expenseId: 0,
      description: '',
      date: '',
      type: '',
      amount: null,
      transactionType: 'outcome'
    };
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.expenseId === 0) {
      this.insertRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postExpenseDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Expense Detail Register');
        this.service.refreshList();
      },
      err => {
        this.toastr.error('Transaction could not be saved');
      }
    );
  }
}
