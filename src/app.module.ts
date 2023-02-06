import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletsModule } from './Wallet/wallets.module';
import { SignupModule } from './SignUp/signup.module';
import { TransactionsModule } from './Transactions/transactions.module';


@Module({
  imports: [WalletsModule, SignupModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
