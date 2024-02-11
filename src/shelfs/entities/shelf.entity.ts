import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToOne } from 'typeorm'
import { User } from '../../user/entities/user.entity'
@Entity()
export class Shelf {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  shelfPlace: string
  @Column()
  shelfNumber: number
  @Column()
  shelfUserId: number
  @ManyToOne(() => User)
  @JoinTable()
  shelfUser: User
}
