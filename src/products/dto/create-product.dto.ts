import { IsNotEmpty, IsOptional, IsEnum, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ProductStatus } from '../entities/product.entity';

export class CreateProductDto {
  @ApiProperty({
    description: 'El nombre del producto',
    example: 'Camiseta de algodón',
  })
  @IsNotEmpty()
  nombreProducto: string;

  @ApiProperty({
    description: 'La descripción del producto',
    example: 'Camiseta de algodón 100% de alta calidad, disponible en varios colores',
  })
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({
    description: 'El precio del producto',
    example: 19.99,
  })
  @IsNotEmpty()
  @Min(0)
  precio: number;

  @ApiPropertyOptional({
    description: 'La categoría del producto',
    example: 'Ropa',
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

  @ApiProperty({
    description: 'El ID del vendedor del producto',
    example: 1,
  })
  @IsNotEmpty()
  idVendedor: number;

  @ApiProperty({
    description: 'La cantidad disponible del producto',
    example: 25,
  })
  @IsNotEmpty()
  @Min(0)
  cantidadDisponible: number;

  @ApiPropertyOptional({
    description: 'La URL de la imagen del producto',
    example: 'https://example.com/imagen.jpg',
  })
  @IsOptional()
  imagen?: string;
}