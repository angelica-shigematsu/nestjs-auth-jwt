import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';
//npm i --save @nestjs/config
@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig)
  ]
})
export class AppModule {}
