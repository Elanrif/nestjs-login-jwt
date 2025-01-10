import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async register(registerDto) {
    const { password } = registerDto;
    return password;
  }
}
