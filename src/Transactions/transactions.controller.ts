import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('deposit')
export class TransactionsController {
  constructor(private readonly addTransaction: TransactionsService) {}
  @Post()
  createTransaction(
    @Body('wallet_id') walletID: string,
    @Body('transaction_type') type: string,
    @Body('amount') amount: number,
    @Body('description') details: string,
  ): any {
    const new_transaction_id = this.addTransaction.createTransaction(
      walletID,
      type,
      amount,
      details,
    );
    return { id: new_transaction_id };
  }
}
