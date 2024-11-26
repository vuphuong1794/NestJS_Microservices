import { Module } from '@nestjs/common';
//import { ClientsModule, Transport } from '@nestjs/microservices';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}