import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      rating: 4.0,
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      rating: 3.5,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook = {
      ...createBookDto,
      id: this.books.length + 1,
    };

    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
