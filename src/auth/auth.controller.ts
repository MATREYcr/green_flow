import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerUsertDto: CreateUserDto) {
    return this.authService.registerUser(registerUsertDto);
  }

  @Post('login')
  login(@Body() loginUsertDto: LoginUserDto) {
    return this.authService.loginUser(loginUsertDto);
  }
}
