import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
enum UserType {
    NORMAL = 'normal',
    CORPORATE = 'corporativo',
  }
export class RegisterUserDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  apellido: string;

  @IsEmail()
  correo: string;

  @IsNotEmpty()
  contraseña: string;

  @IsNotEmpty()
  contacto: string;

  @IsEnum(UserType)
  tipoUsuario: UserType;
}
