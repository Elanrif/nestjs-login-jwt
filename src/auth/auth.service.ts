import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

@Injectable()
export class AuthService {
  async register(registerDto) {
    const { password } = registerDto;
    const hashedPassword = await hash(password, 10);
    return hashedPassword;
  }
}
