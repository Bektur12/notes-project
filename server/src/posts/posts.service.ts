import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>,
  ) {}

  async getAll(): Promise<PostEntity[]> {
    return await this.postsRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }

  async getOne(id: number): Promise<PostEntity> {
    const post = await this.postsRepository.findOne({ where: { id } });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  async update(
    id: number,
    updateData: Partial<PostEntity>,
  ): Promise<PostEntity> {
    await this.postsRepository.update(id, updateData);
    const updatedPost = await this.postsRepository.findOne({ where: { id } });
    if (!updatedPost) {
      throw new NotFoundException('Post not found');
    }
    return updatedPost;
  }

  async create(post: PostEntity): Promise<PostEntity> {
    const createdPost = await this.postsRepository.save(post);

    return createdPost;
  }
}
