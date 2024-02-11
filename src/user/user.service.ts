import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userFromRepository: Repository<User>
  ) {}

  async findAllUsers(): Promise<User[]> {
    return await this.userFromRepository.find()
  }
  async findUserById(id: number): Promise<User> {
    return await this.userFromRepository.findOneBy({ id })
  }

  async createUser(user: User) {
    const createdUser = this.userFromRepository.create(user)

    if (!createdUser) {
      throw new NotFoundException('User could not be created')
    }

    return await this.userFromRepository.save(user)
  }
}
