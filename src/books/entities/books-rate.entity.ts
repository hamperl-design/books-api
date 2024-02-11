import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, JoinTable } from 'typeorm'
import { User } from '../../user/entities/user.entity'
import { Book } from './book.entity'

@Entity()
export class BooksRateEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  rate: number
  @Column()
  comment: string
  @Column()
  bookId: number
  @Column()
  userId: number
  @Column({ type: 'datetime', default: () => 'NOW()' })
  createdAt: Date

  @ManyToMany(() => User)
  @JoinColumn()
  user: User
  @ManyToMany(() => Book)
  @JoinColumn()
  book: Book
}
