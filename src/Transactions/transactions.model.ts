export class TransactionsModel {
  constructor(
    public transaction_id: string,
    public wallet_id: string,
    public transactions_type: string,
    public amount: number,
    public description: string,
  ) {}
}
