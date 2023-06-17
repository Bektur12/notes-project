import { Body, Injectable, NotFoundException, Param } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './userCreate.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(@Param('id') id): Promise<User[]> {
    return await this.userRepository.find(id);
  }

  async findOneWithPosts(id: number): Promise<User> {
    return this.userRepository.findOneWithPosts(id);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    return user;
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;
    const user = this.userRepository.create({ username, password });
    return await this.userRepository.save(user);
  }
}
