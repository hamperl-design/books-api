import { Module } from '@nestjs/common'
import { ShelfsService } from './shelfs.service'
import { ShelfsController } from './shelfs.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Shelf } from './entities/shelf.entity'
import { User } from '../user/entities/user.entity'
import { UserModule } from '../user/user.module'

@Module({
  imports: [TypeOrmModule.forFeature([Shelf, User]), UserModule],
  controllers: [ShelfsController],
  providers: [ShelfsService]
})
export class ShelfsModule {}
