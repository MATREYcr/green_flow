import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //Conexion a bd
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin30',
      database: 'greenflow',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], //Cualquier archivo que termine en .entity es cargado por el typeOrm
      synchronize: true, //para q se active la creacion de las tablas
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
