import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findOneWithPosts(id: number): Promise<User> {
    return this.findOne({ where: { id }, relations: ['posts'] });
  }
}
