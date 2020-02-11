export class ExpenseDetail {
  expenseId: number;
  description: string;
  date: string;
  type: string;
  amount: number;
  transactionType: 'income' | 'outcome';
}
