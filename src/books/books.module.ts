import { Module } from '@nestjs/common'
import { BooksController } from './books.controller'
import { BooksService } from './books.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Book } from './entities/book.entity'
import { BooksReadEntity } from './entities/books-read.entity'
import { BookStoredEntity } from './entities/book-stored.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Book, BooksReadEntity, BookStoredEntity])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
