import { Controller, Post, Body } from '@nestjs/common';
import { WalletService } from './wallets.service';

@Controller('wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}
  @Post()
  createWallet(@Body('wallet_name') name: string): any {
    const new_wallet_id = this.walletService.createWallet(name);
    return { id: new_wallet_id };
  }
}

