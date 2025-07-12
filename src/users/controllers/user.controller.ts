import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GetUserDto } from '../dto/get.users.dto';
import { CreateUserDto } from '../dto/create.user.dto';
import { UpdateUserDto } from '../dto/put.user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<GetUserDto[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<GetUserDto> {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(
    @Body() userDto: CreateUserDto,
  ): Promise<CreateUserDto> {
    return this.userService.createUser(userDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userDto: UpdateUserDto,
  ): Promise<UpdateResult> {
    return this.userService.updateUser(id, userDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<DeleteResult> {
    return this.userService.deleteUser(id);
  }
}
