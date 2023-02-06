import { Controller, Post, Body } from '@nestjs/common';
import { SignUpService } from './signup.service';

@Controller('register')
export class SignUpController {
  constructor(private readonly signup: SignUpService) {}
  @Post()
  createUser(
    @Body('user_name') name: string,
    @Body('user_email') email: string,
    @Body('user_password') password: string,
  ): any {
    const new_user_id = this.signup.createUser(name, email, password);
    return { id: new_user_id };
  }
}
