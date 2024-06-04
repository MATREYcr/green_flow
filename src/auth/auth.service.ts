import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async registerUser(registerUserDto: CreateUserDto) {
    try {
      const userFound = await this.usersService.findOneUserByEmail(
        registerUserDto.correo,
      );
      if (userFound) {
        throw new HttpException(
          'User alredy Exist',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return await this.usersService.createUser(registerUserDto);
    } catch (error) {
      throw error;
    }
  }

  async loginUser({ correo, contraseña }: LoginUserDto) {
    try {
      const userFound = await this.usersService.findOneUserByEmail(correo);
      console.log(userFound, 'userFound');
      if (!userFound) {
        throw new HttpException(
          'Correo is wrong',
          HttpStatus.NON_AUTHORITATIVE_INFORMATION,
        );
      }
      if (contraseña !== userFound.contraseña) {
        throw new HttpException(
          'Contraseña is wrong',
          HttpStatus.NON_AUTHORITATIVE_INFORMATION,
        );
      }
      return userFound;
    } catch (error) {
      throw error;
    }
  }
}
