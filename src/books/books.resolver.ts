import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Book } from '../books/books.model';
import { BookService } from '../books/books.service';
import { BookInput } from '../books/books.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => [Book]) // Fetch all books
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Query(() => Book, { nullable: true }) // Get a single book by ID
  async getBookById(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Book | null> {
    return this.bookService.findById(id);
  }

  @Mutation(() => Book)
  async createBook(@Args('input') input: BookInput): Promise<Book> {
    return this.bookService.create(input);
  }

  @Mutation(() => Book)
  async updateBook(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: BookInput,
  ): Promise<Book> {
    return this.bookService.update(id, input);
  }

  @Mutation(() => Book)
  async deleteBook(@Args('id', { type: () => ID }) id: string): Promise<Book> {
    return this.bookService.delete(id);
  }
}
