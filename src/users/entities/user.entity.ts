import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';


enum UserType {
  NORMAL = 'normal',
  CORPORATE = 'corporativo',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  nombre: string;

  @Column()
  @IsNotEmpty()
  apellido: string;

  @Column()
  @IsEmail()
  correo: string;

  @Column()
  @IsNotEmpty()
  contraseña: string;

  @Column()
  @IsNotEmpty()
  contacto: string;
}
