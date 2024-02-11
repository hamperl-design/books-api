import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ShelfsService } from './shelfs.service'
import { CreateShelfDto } from './dto/create-shelf.dto'
import { UpdateShelfDto } from './dto/update-shelf.dto'

@Controller('shelf')
export class ShelfsController {
  constructor(private readonly shelfsService: ShelfsService) {}

  @Post()
  create(@Body() createShelfDto: CreateShelfDto) {
    return this.shelfsService.create(createShelfDto)
  }

  @Get()
  findAll() {
    return this.shelfsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shelfsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShelfDto: UpdateShelfDto) {
    return this.shelfsService.update(+id, updateShelfDto)
  }
}
