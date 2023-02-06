import { Injectable } from '@nestjs/common';
import { TransactionsModel } from './transactions.model';

@Injectable()
export class TransactionsService {
  transactions: TransactionsModel[] = [];
  id: string = (Math.random() * 100000).toString();
  createTransaction(
    wallet_id: string,
    transaction_type: string,
    amount: number,
    details: string,
  ) {
    const new_transaction = new TransactionsModel(
      this.id,
      wallet_id,
      transaction_type,
      amount,
      details,
    );
    this.transactions.push(new_transaction);
    return this.id;
  }
}
