import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tile: string
  @Column()
  description: string
  @Column()
  author: string
  @Column()
  publisher: string
  @Column()
  isbn: string
  @Column()
  pages: number | null
  @Column({ default: false })
  hardcover: boolean
}
