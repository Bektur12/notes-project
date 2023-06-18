import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';

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

  async create(post: PostEntity): Promise<PostEntity> {
    const createdPost = await this.postsRepository.save(post);

    return createdPost;
  }
}
