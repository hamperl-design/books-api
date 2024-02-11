import { Module } from '@nestjs/common'
import { BooksController } from './books.controller'
import { BooksService } from './books.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Book } from './entities/book.entity'
import { BooksReadEntity } from './entities/books-read.entity'
import { BookStoredEntity } from './entities/book-stored.entity'
import { BooksRateEntity } from './entities/books-rate.entity'
import { BooksLendEntity } from './entities/books-lend.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Book,
      BooksReadEntity,
      BookStoredEntity,
      BooksRateEntity,
      BooksLendEntity
    ])
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
