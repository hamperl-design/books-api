import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'
import { BooksModule } from './books/books.module'
import { ShelfsModule } from './shelfs/shelfs.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
      logging: true,
      autoLoadEntities: true
    }),
    UserModule,
    BooksModule,
    ShelfsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
