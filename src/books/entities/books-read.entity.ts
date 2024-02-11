import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, JoinTable } from 'typeorm'
import { User } from '../../user/entities/user.entity'
import { Book } from './book.entity'

@Entity()
export class BooksReadEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tile: string
  @Column()
  userId: number
  @Column()
  bookId: number
  @Column()
  status: string
  @Column({ type: 'datetime', default: () => 'NOW()' })
  createdAt: Date

  @ManyToMany(() => User)
  @JoinColumn()
  user: User
  @ManyToMany(() => Book)
  @JoinColumn()
  book: Book
}
