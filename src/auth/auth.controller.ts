import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  register(@Body() registerUsertDto: RegisterUserDto) {
    return this.authService.registerUser(registerUsertDto);
  }

  @Post('login')
  login(@Body() loginUsertDto: LoginUserDto) {
    return this.authService.loginUser(loginUsertDto);
  }

}
