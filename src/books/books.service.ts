import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './books.model';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(book: Book): Promise<Book> {
    const existingBook = await this.bookModel.findOne({
      title: book.title,
      author: book.author,
    });

    if (existingBook) {
      throw new Error('Book already exists');
    }

    const newBook = new this.bookModel(book);
    return await newBook.save();
  }

  async findAll(): Promise<Book[]> {
    const books = await this.bookModel.find();

    if (books.length === 0) {
      throw new Error('No books found');
    }

    return books;
  }

  async findById(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);

    if (!book) {
      throw new Error(`Book with ID ${id} not found`);
    }

    return book;
  }

  async update(id: string, book: Book): Promise<Book> {
    const updatedBook = await this.bookModel
      .findByIdAndUpdate(id, book, { new: true })
      .exec();

    if (!updatedBook) {
      throw new Error(`Book with ID ${id} not found`);
    }

    return updatedBook;
  }

  async delete(id: string): Promise<Book> {
    const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();

    if (!deletedBook) {
      throw new Error(`Book with ID ${id} not found`);
    }

    return deletedBook;
  }
}
