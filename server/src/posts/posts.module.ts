import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from '../entities/post.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UserService } from '../users/users.service';
import { User } from '../entities/user.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, User]), UsersModule],
  controllers: [PostsController],
  providers: [PostsService, UserService],
})
export class PostsModule {}
