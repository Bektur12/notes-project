import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostEntity } from './entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAll(): Promise<PostEntity[]> {
    return await this.postsService.getAll();
  }

  @Post()
  async create(@Body() data: Partial<PostEntity>): Promise<PostEntity> {
    return await this.postsService.create({
      title: data.title,
      description: data.description,
    });
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<PostEntity> {
    return await this.postsService.getOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<PostEntity>,
  ): Promise<PostEntity> {
    return await this.postsService.update(+id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.postsService.remove(+id);
  }
}
