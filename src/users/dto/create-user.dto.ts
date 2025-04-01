import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum UserType {
  NORMAL = 'normal',
  CORPORATE = 'corporativo',
}

export class CreateUserDto {
  @ApiProperty({
    description: 'El nombre del usuario',
    example: 'Juan',
  })
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({
    description: 'El apellido del usuario',
    example: 'Pérez',
  })
  @IsNotEmpty()
  apellido: string;

  @ApiProperty({
    description: 'El correo electrónico del usuario',
    example: 'juan.perez@example.com',
  })
  @IsEmail()
  correo: string;

  @ApiProperty({
    description: 'La contraseña del usuario',
    example: 'miContraseñaSegura123',
  })
  @IsNotEmpty()
  contraseña: string;

  @ApiProperty({
    description: 'El número de contacto del usuario',
    example: '+1234567890',
  })
  @IsNotEmpty()
  contacto: string;

}