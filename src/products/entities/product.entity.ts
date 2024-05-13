import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsOptional, IsEnum, Min } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export enum ProductStatus {
    AVAILABLE = 'disponible',
    SOLD = 'vendido',
    RESERVED = 'reservado',
}

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    nombreProducto: string;

    @Column()
    @IsNotEmpty()
    descripcion: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    @Min(0)
    precio: number;

    @Column({ nullable: true })
    @IsOptional()
    categoria: string;

    @Column({ type: 'enum', enum: ProductStatus, default: ProductStatus.AVAILABLE })
    @IsEnum(ProductStatus)
    estado: ProductStatus;

    @Column()
    @Min(0)
    cantidadDisponible: number;
    
    @Column({ nullable: true })
    @IsOptional()
    imagen: string;

    @ManyToOne(() => User, user => user.productos)
    vendedor: User;
}
