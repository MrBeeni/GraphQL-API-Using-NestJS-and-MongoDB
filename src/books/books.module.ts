import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from './books.service';
import { BookResolver } from './books.resolver';
import { Book, BookSchema } from './books.model';

@Module({
  providers: [BookService, BookResolver],
  imports: [
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },
    ]),
  ],
})
export class BooksModule {}
