import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './userCreate.dto';
import { User } from '../entities/user.entity';
import { PostEntity } from 'src/entities/post.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id/posts')
  async getUserPosts(@Param('id') id: number): Promise<PostEntity[]> {
    const user = await this.userService.findOneWithPosts(id);
    return user.posts;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: any): Promise<User> {
    return await this.userService.findOneWithPosts(id);
  }
}
