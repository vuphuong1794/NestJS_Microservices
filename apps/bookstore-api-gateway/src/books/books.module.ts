import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [
    //ket noi gateway voi books service (ket noi dung giao thuc va port)
    ClientsModule.register([
      {
        name: 'BOOKS_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
