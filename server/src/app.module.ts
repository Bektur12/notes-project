import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './posts/entities/post.entity';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'noteserver',
      entities: [PostEntity, User],
      synchronize: true,
    }),
    PostsModule,
    AuthModule,
  ],
})
export class AppModule {}
