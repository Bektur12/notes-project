import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>,
  ) {}
  async getAll(
    title: string,
    userId: number,
    page: number,
    limit: number,
  ): Promise<{ posts: PostEntity[]; total: number }> {
    const where = {};

    if (title) {
      where['title'] = title;
    }

    if (userId) {
      where['userId'] = userId;
    }

    const [posts, total] = await this.postsRepository.findAndCount({
      where,
      skip: (page - 1) * limit,
      take: limit,
      relations: ['user'],
    });

    return { posts, total };
  }

  async getById(@Param() id: number): Promise<PostEntity> {
    return await this.postsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }

  async create(post: PostEntity): Promise<PostEntity> {
    const createdPost = await this.postsRepository.save(post);

    return createdPost;
  }
}
