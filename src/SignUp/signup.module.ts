import { Module } from '@nestjs/common';
import { SignUpController } from './signup.controller';
import { SignUpService } from './signup.service';

@Module({
  controllers: [SignUpController],
  providers: [SignUpService],
})
export class SignupModule {}
