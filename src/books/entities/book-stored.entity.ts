import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, JoinTable } from 'typeorm'
import { User } from '../../user/entities/user.entity'
import { Book } from './book.entity'
import { Shelf } from '../../shelfs/entities/shelf.entity'

@Entity()
export class BookStoredEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  shelfLayer: number
  @Column()
  bookId: number
  @Column()
  shelfId: number
  @Column({ type: 'datetime', default: () => 'NOW()' })
  createdAt: Date

  @ManyToMany(() => Shelf)
  @JoinColumn()
  shelf: Shelf
  @ManyToMany(() => Book)
  @JoinColumn()
  book: Book
}
