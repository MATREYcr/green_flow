import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>) { }

  createUser(createUserDto: CreateUserDto) {
    try {
      const newUser = this.usersRepository.create(createUserDto);
      return this.usersRepository.save(newUser);
    } catch (error) {
      console.error('Error creating User', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAllUsers() {
    try {
      return this.usersRepository.find({
      });
    } catch (error) {
      console.error('Error getting all Users', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneUserByEmail(correo: string) {
    try {
      const userFound = await this.usersRepository.findOne({
        where: { correo }
      });
      console.log(userFound, "findOneUserByEmail");
      return userFound;
 
    } catch (error) {
      throw error;
    }
  }

  async findOneUserById(id: number) {
    try {
      const userFound = await this.usersRepository.findOne({
        where: { id },
      });
      if (!userFound) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return userFound;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    try {
      const userFound = await this.findOneUserById(id);
      const updateUser = Object.assign(userFound, updateUserDto)
      return this.usersRepository.save(updateUser);
    } catch (error) {
      console.error('Error update User', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeUser(id: number) {
    try {
      const result = await this.usersRepository.delete({ id });
      if (result.affected === 0) {
        return new HttpException('User Not Found', HttpStatus.NOT_FOUND)
      }
      return result;
    } catch (error) {
      console.error('Error delete User', error);
      throw error;
    }
  }
}
