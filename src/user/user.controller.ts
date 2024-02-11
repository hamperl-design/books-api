import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './entities/user.entity'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers()
  }

  @Get('/:user_id')
  async getUserById(@Param('user_id') user_id: number): Promise<User> {
    return this.userService.findUserById(user_id)
  }

  @Post('contact-form-language/create')
  async createNewUser(@Body() user: User, @Res() res) {
    try {
      const createdUser = await this.userService.createUser(user)
      if (createdUser) {
        res.status(HttpStatus.OK).json({ data: createdUser })
      } else {
        res.status(HttpStatus.BAD_REQUEST).json({ message: 'Failed to create user' })
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })
    }
  }
}
