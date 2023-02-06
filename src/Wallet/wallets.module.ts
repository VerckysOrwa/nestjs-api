import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallets.service';


@Module({
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletsModule {}
