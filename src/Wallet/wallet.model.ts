export class WalletModel {
  wallet_name: string;
  wallet_id: string;
  constructor(wallet_name: string, wallet_id: string) {
    this.wallet_name = wallet_name;
    this.wallet_id = wallet_id;
  }
}
