import { UserDto } from '../../user/dto/user.dto'

export interface ShelfUserDto {
  shelfPlace: string
  shelfNumber: number
  shelfUser: UserDto
}
