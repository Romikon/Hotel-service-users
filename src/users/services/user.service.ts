import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { GetUserDto } from '../dto/get.users.dto';
import { CreateUserDto } from '../dto/create.user.dto';
import { UpdateUserDto } from '../dto/put.user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getUserById(id: string): Promise<GetUserDto> {
    try {
      const user = await this.userRepository.findOneBy({ id });

      if (!user) {
        throw new Error(`User with ID ${id} not found`);
      }

      return user;
    } catch (e) {
      throw new Error('Error while getting user by ID: ' + e);
    }
  }

  async getUsers(): Promise<GetUserDto[]> {
    try {

      return this.userRepository.find();
    } catch (e) {
      throw new Error('Error while getting all users from the database: ' + e);
    }
    
  }

  async createUser(userDto: CreateUserDto): Promise<CreateUserDto> {
    try {
      const userEntity = await this.userRepository.save(userDto);

      return userEntity;
    } catch (e) {
      throw new Error('Error while creating user: ' + e);
    }
    
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    try {
      const existingUser = await this.getUserById(id);

      if (!existingUser) {
        throw new Error(`User with ID ${id} not found`);
      }

      return this.userRepository.update(id, updateUserDto);
    } catch (e) {
      throw new Error('Error while updating user: ' + e);
    }
    
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    try {
      const existingUser = await this.getUserById(id);

      if (!existingUser) {
        throw new Error(`User with ID ${id} not found`);
      }
      return this.userRepository.delete(id);
    } catch (e) {
      throw new Error('Error while deleting user: ' + e);
    }
  }
}
