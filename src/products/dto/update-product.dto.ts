import { IsOptional, IsEnum, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ProductStatus } from '../entities/product.entity';

export class UpdateProductDto {
  @ApiPropertyOptional({
    description: 'El nuevo nombre del producto',
    example: 'Camiseta de algodón azul',
  })
  @IsOptional()
  nombreProducto?: string;

  @ApiPropertyOptional({
    description: 'La nueva descripción del producto',
    example: 'Camiseta de algodón 100% de alta calidad, color azul marino',
  })
  @IsOptional()
  descripcion?: string;

  @ApiPropertyOptional({
    description: 'El nuevo precio del producto',
    example: 24.99,
  })
  @IsOptional()
  @Min(0)
  precio?: number;

  @ApiPropertyOptional({
    description: 'La nueva categoría del producto',
    example: 'Ropa de hombre',
  })
  @IsOptional()
  categoria?: string;

  @ApiPropertyOptional({
    description: 'El nuevo estado del producto',
    enum: ProductStatus,
    example: ProductStatus.SOLD,
  })
  @IsOptional()
  @IsEnum(ProductStatus)
  estado?: ProductStatus;

  @ApiPropertyOptional({
    description: 'La nueva cantidad disponible del producto',
    example: 0,
  })
  @IsOptional()
  @Min(0)
  cantidadDisponible?: number;

  @ApiPropertyOptional({
    description: 'La nueva URL de la imagen del producto',
    example: 'https://example.com/nueva-imagen.jpg',
  })
  @IsOptional()
  imagen?: string;
}