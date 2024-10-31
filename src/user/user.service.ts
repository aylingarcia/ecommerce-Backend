import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne(id_user: number) {
    return this.userRepository.findOneBy({ id_user });
  }

  create(user: User) {
    return this.userRepository.save(user);
  }

  async update(id_user: number, user: User) {
    await this.userRepository.update(id_user, user);
    return this.userRepository.findOneBy({ id_user });
  }
}
