import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostEntity } from '../entities/post.entity';
import { UserService } from '../users/users.service';

export interface PostData {
  title: string;
  description: string;
  userId: number;
}

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async getAll(): Promise<PostEntity[]> {
    return await this.postsService.getAll();
  }

  @Post()
  async create(@Body() data: PostData): Promise<PostEntity> {
    try {
      const { title, description, userId } = data;

      if (!userId) {
        throw new Error('User ID is required');
      }

      const user = await this.userService.findOne(userId);
      console.log(userId, 'beeeeek');

      if (!user) {
        throw new Error(`User with ID ${userId} not found`);
      }

      const post = new PostEntity();
      post.title = title;
      post.description = description;
      post.user = user;

      return await this.postsService.create(post);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.postsService.remove(+id);
  }
}
