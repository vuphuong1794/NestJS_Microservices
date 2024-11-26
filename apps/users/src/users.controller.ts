import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //trong microservices sử dụng message và event
  @MessagePattern('users.findAll')
  findAll() {
    return this.usersService.findAll();
  }
}
