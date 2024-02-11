import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Book } from './entities/book.entity'
import { Repository } from 'typeorm'
import { BooksReadEntity } from './entities/books-read.entity'
import { UpdateShelfDto } from '../shelfs/dto/update-shelf.dto'
import { User } from '../user/entities/user.entity'
import { BookStoredEntity } from './entities/book-stored.entity'

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(BooksReadEntity)
    private readonly bookReadRepository: Repository<BooksReadEntity>,
    @InjectRepository(BookStoredEntity)
    private readonly bookStoredRepository: Repository<BookStoredEntity>
  ) {}

  async create(bookDto: Book) {
    const createBook = this.bookRepository.create(bookDto)
    if (!createBook) {
      throw new NotFoundException('Shelf could not be created')
    }

    return await this.bookRepository.save(bookDto)
  }
  async findAll() {
    return await this.bookRepository.find()
  }
  async findBookById(id: number): Promise<Book> {
    return await this.bookRepository.findOneBy({ id })
  }
  async update(id: number, bookDto: Book) {
    const book = await this.bookRepository.findOneBy({ id })
    if (!book) {
      throw new NotFoundException('Shelf could not be updated')
    }

    Object.assign(book, bookDto)
    return await this.bookRepository.save(book)
  }

  async createReadBook(bookReadDto: BooksReadEntity) {
    const createReadBook = this.bookReadRepository.create(bookReadDto)
    if (!createReadBook) {
      throw new NotFoundException('Shelf could not be created')
    }

    return await this.bookReadRepository.save(createReadBook)
  }
  async findAllReadBooks() {
    return await this.bookReadRepository.find()
  }
  async findOneReadBook(id: number) {
    return await this.bookReadRepository.findOneBy({ id })
  }
  async updateReadBook(id: number, bookReadDto: BooksReadEntity) {
    const bookRead = await this.bookReadRepository.findOneBy({ id })
    if (!bookRead) {
      throw new NotFoundException('Shelf could not be updated')
    }

    Object.assign(bookRead, bookReadDto)
    return await this.bookReadRepository.save(bookRead)
  }

  async createBookStore(bookStore: BookStoredEntity) {
    const createBookStore = this.bookStoredRepository.create(bookStore)
    if (!createBookStore) {
      throw new NotFoundException('Shelf could not be created')
    }

    return await this.bookStoredRepository.save(createBookStore)
  }
  async findAllStoredBooks() {
    return await this.bookStoredRepository.find()
  }
  async findOneBookStore(id: number) {
    return await this.bookStoredRepository.findOneBy({ id })
  }
  async updateBookStore(id: number, bookStoreDto: BookStoredEntity) {
    const bookStored = await this.bookStoredRepository.findOneBy({ id })
    if (!bookStored) {
      throw new NotFoundException('Shelf could not be updated')
    }

    Object.assign(bookStored, bookStoreDto)
    return await this.bookRepository.save(bookStored)
  }
}
