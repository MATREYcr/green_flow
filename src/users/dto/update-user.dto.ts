import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

enum UserType {
  NORMAL = 'normal',
  CORPORATE = 'corporativo',
}

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'El nuevo nombre del usuario',
    example: 'Juan',
  })
  @IsNotEmpty()
  nombre?: string;

  @ApiPropertyOptional({
    description: 'El nuevo apellido del usuario',
    example: 'Pérez',
  })
  @IsNotEmpty()
  apellido?: string;

  @ApiPropertyOptional({
    description: 'El nuevo correo electrónico del usuario',
    example: 'juan.perez@example.com',
  })
  @IsEmail()
  correo?: string;

  @ApiPropertyOptional({
    description: 'La nueva contraseña del usuario',
    example: 'miNuevaContraseñaSegura123',
  })
  @IsNotEmpty()
  contraseña?: string;

  @ApiPropertyOptional({
    description: 'El nuevo número de contacto del usuario',
    example: '+1234567890',
  })
  @IsNotEmpty()
  contacto?: string;

  @ApiPropertyOptional({
    description: 'El nuevo tipo de usuario (normal o corporativo)',
    enum: UserType,
    example: UserType.CORPORATE,
  })
  @IsEnum(UserType)
  tipoUsuario?: UserType;
}