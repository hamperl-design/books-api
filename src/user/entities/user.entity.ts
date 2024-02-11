import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string
  @Column()
  firstName: string
  @Column()
  lastName: string
  @Column({ default: null })
  externalId: string | null
  @Column({ type: 'datetime', default: () => 'NOW()' })
  createdAt: Date
}
