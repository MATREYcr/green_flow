import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    private readonly usersService: UsersService,
  ) { }

  async createProduct(createProductDto: CreateProductDto) {
    try {
      const findUser = await this.usersService.findOneUserById(createProductDto.idVendedor);
      delete createProductDto.idVendedor;
      const newProduct = this.productsRepository.create({
        ...createProductDto,
        vendedor: findUser
      });
      return await this.productsRepository.save(newProduct);
    } catch (error) {
      console.error('Error creating Product', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllProducts() {
    try {
      return await this.productsRepository.find({
        relations: ['vendedor']
      });
    } catch (error) {
      console.error('Error getting all Products', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneProduct(id: number) {
    try {
      const productFound = await this.productsRepository.findOne({
        where: { id },
        relations: ['vendedor']
      }
      );
      if (!productFound) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }
      return productFound;
    } catch (error) {
      console.error('Error finding Product by ID', error);
      throw error;
    }
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    try {
      const productFound = await this.findOneProduct(id);
      const updatedProduct = Object.assign(productFound, updateProductDto);
      return await this.productsRepository.save(updatedProduct);
    } catch (error) {
      console.error('Error updating Product', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeProduct(id: number) {
    try {
      const result = await this.productsRepository.delete(id);
      if (result.affected === 0) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      console.error('Error deleting Product', error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
