import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/UserEntity';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { UpdateUserDto } from 'src/dtos/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
    ) {}

    async createUser(data: CreateUserDto): Promise<UserEntity> {
      const user = this.usersRepository.create(data);
      await this.usersRepository.save(user);

      return user;
    }

  async getAllUsers(): Promise<UserEntity[]> {
    const findAllUsers = await this.usersRepository.find({
      select: ['id', 'firstName', 'lastName', 'email']
    });
    return findAllUsers;
  }

  async findOneOrFail(options: FindOneOptions<UserEntity>) { 
    try {
      return await this.usersRepository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async updatedUser(id: string, data: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findOneOrFail({ where: { id: id } });
    this.usersRepository.merge(user, data);
    return this.usersRepository.save(user);
  }

  async deletedUser(id: string) {
    await this.usersRepository.findOneOrFail({ where: { id: id }})
    this.usersRepository.softDelete({ id: id })
  }
}