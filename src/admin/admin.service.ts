// src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  findAll() {
    return this.adminRepository.find();
  }

  findOne(id: number) {
    return this.adminRepository.findOneBy({ id });
  }

  create(admin: Admin) {
    return this.adminRepository.save(admin);
  }

  async update(id: number, admin: Admin) {
    await this.adminRepository.update(id, admin);
    return this.adminRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.adminRepository.delete(id);
    return { message: `Admin con ID ${id} eliminado` };
  }
}
