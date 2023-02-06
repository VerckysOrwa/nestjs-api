import { Injectable } from '@nestjs/common';
import { WalletModel } from './wallet.model';

@Injectable()
export class WalletService {
  wallets: WalletModel[] = [];
  id: string = (Math.random() * 100000).toString();
  createWallet(name: string) {
    const new_wallet = new WalletModel(name, this.id);
    this.wallets.push(new_wallet);
    return this.id;
  }
}
