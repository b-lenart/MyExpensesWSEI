import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpenseDetailService } from 'src/app/shared/expense-detail.service';
import { ExpenseDetail } from 'src/app/shared/expense-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  @Input() transaction: ExpenseDetail;
  @Output() modalClose = new EventEmitter();

  constructor(public service: ExpenseDetailService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  editTransaction() {
    console.log(this.transaction);
    this.service.putExpenseDetail(this.transaction)
    .subscribe(res => {
      this.modalClose.emit();
      this.service.refreshList();
      console.log('edited successfully');
      this.toastr.success('Edited successfully', 'Expense Detail Register');
    },
    err => {
      this.toastr.error('Form could not be edited');
    });
  }

  onCloseModal() {
    this.modalClose.emit();
  }
}
