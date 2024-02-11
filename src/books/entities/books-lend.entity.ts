import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, OneToOne } from 'typeorm'
import { User } from '../../user/entities/user.entity'
import { Book } from './book.entity'

@Entity()
export class BooksLendEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  fromUserId: number
  @Column()
  toUserId: number
  @Column()
  bookId: number
  @Column({ type: 'datetime', default: () => 'NOW()' })
  createdAt: Date
  @Column({ type: 'datetime' })
  receivedBack: Date

  @OneToOne(() => User)
  @JoinColumn({ name: 'fromUserId' })
  fromUser: User
  @OneToOne(() => User)
  @JoinColumn({ name: 'toUserId' })
  toUser: User
  @ManyToMany(() => Book)
  @JoinColumn()
  book: Book
}
