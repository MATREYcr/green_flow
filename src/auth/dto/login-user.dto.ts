import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'Email should be a valid email address' })
  @IsNotEmpty({ message: 'Email cannot be empty' })
  correo: string;

  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  contraseña: string;
}
