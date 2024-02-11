import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { Book } from './entities/book.entity'
import { BooksService } from './books.service'
import { BooksReadEntity } from './entities/books-read.entity'
import { BookStoredEntity } from './entities/book-stored.entity'

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Post()
  create(@Body() createBookDto: Book) {
    return this.bookService.create(createBookDto)
  }
  @Get()
  findAll() {
    return this.bookService.findAll()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findBookById(+id)
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBook: Book) {
    return this.bookService.update(+id, updateBook)
  }

  @Post('/read')
  createReadBook(@Body() createReadBookDto: BooksReadEntity) {
    return this.bookService.createReadBook(createReadBookDto)
  }
  @Get('/read')
  findAllReadBook() {
    return this.bookService.findAllReadBooks()
  }
  @Get('/read/:id')
  findOneReadBook(@Param('id') id: string) {
    return this.bookService.findOneReadBook(+id)
  }
  @Patch('/read/:id')
  updateReadBook(@Param('id') id: string, @Body() updateReadBook: BooksReadEntity) {
    return this.bookService.updateReadBook(+id, updateReadBook)
  }

  @Post('/store')
  createBookStore(@Body() createBookStoreDto: BookStoredEntity) {
    return this.bookService.createBookStore(createBookStoreDto)
  }
  @Get('/store')
  findAllBookStore() {
    return this.bookService.findAllStoredBooks()
  }
  @Get('/store/:id')
  findOneBookStore(@Param('id') id: string) {
    return this.bookService.findOneBookStore(+id)
  }
  @Patch('/store/:id')
  updateBookStore(@Param('id') id: string, @Body() updateBookStore: BookStoredEntity) {
    return this.bookService.updateBookStore(+id, updateBookStore)
  }
}
