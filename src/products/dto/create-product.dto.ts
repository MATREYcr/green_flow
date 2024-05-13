import { IsNotEmpty, IsOptional, IsEnum, Min } from 'class-validator';
import { ProductStatus } from '../entities/product.entity';

export class CreateProductDto {
  @IsNotEmpty()
  nombreProducto: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  @Min(0)
  precio: number;

  @IsOptional()
  categoria: string;

  @IsNotEmpty()
  @IsEnum(ProductStatus)
  estado: ProductStatus;

  @IsNotEmpty()
  idVendedor: number;

  @IsNotEmpty()
  @Min(0)
  cantidadDisponible: number;

  @IsOptional()
  imagen?: string;
}
