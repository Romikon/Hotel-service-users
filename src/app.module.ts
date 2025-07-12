import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { dataSourceOptions } from './db/datasource';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
