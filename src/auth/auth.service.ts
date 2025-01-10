import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto) {
    const { password } = registerDto;
    const hashedPassword = await hash(password, 10);
    const payload = { ...registerDto, password: hashedPassword };
    const createdUser = await this.userService.create(payload);
    return createdUser;
  }

  async login(loginDto) {
    const { email, password } = loginDto;
    const user = await this.userService.findOne({ email });
    if (!user) throw new HttpException('NOT_FOUND', 404);

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) throw new HttpException('INVALID_PASSWORD', 403);

    const payload = { id: user.id, email: user.email, password: user.password };
    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
