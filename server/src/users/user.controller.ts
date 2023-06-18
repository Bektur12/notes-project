import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from '../entities/user.entity';
import { PostEntity } from '../entities/post.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id/posts')
  async getUserPosts(@Param('id') id: number): Promise<PostEntity[]> {
    const user = await this.userService.findOneWithPosts(id);
    if (!user || !user.posts) {
      throw new Error(
        `User with ID ${id} not found or does not have any posts`,
      );
    }
    return user.posts;
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<User> {
    return await this.userService.findOneWithPosts(id);
  }
}
