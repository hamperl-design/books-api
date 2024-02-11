import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateShelfDto } from './dto/create-shelf.dto'
import { UpdateShelfDto } from './dto/update-shelf.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Shelf } from './entities/shelf.entity'
import { Repository } from 'typeorm'
import { User } from '../user/entities/user.entity'
import { ShelfUserDto } from './dto/shelf-user.dto'

@Injectable()
export class ShelfsService {
  constructor(
    @InjectRepository(Shelf)
    private readonly shelfFromRepository: Repository<Shelf>,
    @InjectRepository(User)
    private readonly userFromRepository: Repository<User>
  ) {}
  async create(createShelfDto: CreateShelfDto) {
    const createShelf = this.shelfFromRepository.create(createShelfDto)
    if (!createShelf) {
      throw new NotFoundException('Shelf could not be created')
    }

    return await this.userFromRepository.save(createShelfDto)
  }

  async findAll() {
    return await this.shelfFromRepository.find()
  }

  async findOne(id: number) {
    const shelf: Shelf = await this.shelfFromRepository.findOneBy({ id })
    const user: User = await this.userFromRepository.findOneBy({ id: shelf.shelfUserId })
    const shelfUser: ShelfUserDto = {
      shelfPlace: shelf.shelfPlace,
      shelfNumber: shelf.shelfNumber,
      shelfUser: {
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
      }
    }

    return shelfUser
  }

  async update(id: number, updateShelfDto: UpdateShelfDto) {
    const shelf = await this.shelfFromRepository.findOneBy({ id })
    if (!shelf) {
      throw new NotFoundException('Shelf could not be updated')
    }

    Object.assign(shelf, updateShelfDto)
    return await this.shelfFromRepository.save(shelf)
  }
}
