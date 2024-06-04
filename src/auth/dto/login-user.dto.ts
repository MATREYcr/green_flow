import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'El correo del usuario',
    example: 'juan.perez@example.com',
  })
  @IsEmail({}, { message: 'Email should be a valid email address' })
  @IsNotEmpty({ message: 'Email cannot be empty' })
  correo: string;

  @ApiProperty({
    description: 'La contraseña del usuario',
    example: 'miContraseñaSegura123',
  })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  contraseña: string;
}
