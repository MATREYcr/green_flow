import { IsOptional, IsEnum, Min } from 'class-validator';
import { ProductStatus } from '../entities/product.entity';

export class UpdateProductDto {
  @IsOptional()
  nombreProducto?: string;

  @IsOptional()
  descripcion?: string;

  @IsOptional()
  @Min(0)
  precio?: number;

  @IsOptional()
  categoria?: string;

  @IsOptional()
  @IsEnum(ProductStatus)
  estado?: ProductStatus;

  @IsOptional()
  @Min(0)
  cantidadDisponible?: number;

  @IsOptional()
  imagen?: string;
}
