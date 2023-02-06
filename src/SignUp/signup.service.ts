import { Injectable } from '@nestjs/common';
import { UserModel } from './signup.model';

@Injectable()
export class SignUpService {
  users: UserModel[] = [];
  id: string = (Math.random() * 100000).toString();
  createUser(username: string, email: string, password: string) {
    const new_user = new UserModel(this.id, username, email, password);
    this.users.push(new_user);
    return this.id;
  }
}
