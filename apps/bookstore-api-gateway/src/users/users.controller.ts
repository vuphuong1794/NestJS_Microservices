import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
//import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //trong microservices sử dụng message và event
  //@MessagePattern('users.findAll')
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
