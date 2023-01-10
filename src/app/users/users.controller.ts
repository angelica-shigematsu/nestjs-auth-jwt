import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService) {}

@Get()
  async index() {
    return await this.usersService.getAllUsers();
  }

@Post()
async create(@Body() createdUserDto: CreateUserDto) {
  return this.usersService.createUser(createdUserDto);
}

// @Patch('users/:id')
// async update() {}

// @Delete('users/:id')
// async delete() {}
}