import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signUp(username: string, password: string): Promise<User> {
    const oldUser = await this.userRepository.findOne({ where: { username } });
    if (oldUser) {
      throw new BadRequestException('этот user уже зарегистрирован');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User();
    user.username = username;
    user.password = hashedPassword;
    return this.userRepository.save(user);
  }

  async signIn(username: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Неправильный логин или пароль');
    }

    return user;
  }
}
