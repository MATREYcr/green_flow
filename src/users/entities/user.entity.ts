import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { Product } from 'src/products/entities/product.entity';

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

  @Column({ type: 'enum', enum: UserType, default: UserType.NORMAL })
  @IsEnum(UserType)
  tipoUsuario: UserType;

  @OneToMany(() => Product, product => product.vendedor, {eager: true})
  productos: Product[];
}
