import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoresService } from './categores.service';
import { CreateCategoreDto } from './dto/create-categore.dto';
import { UpdateCategoreDto } from './dto/update-categore.dto';

@Controller('categores')
export class CategoresController {
  constructor(private readonly categoresService: CategoresService) {}

  @Post()
  create(@Body() createCategoreDto: CreateCategoreDto) {
    return this.categoresService.create(createCategoreDto);
  }

  @Get()
  findAll() {
    return this.categoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoreDto: UpdateCategoreDto,
  ) {
    return this.categoresService.update(+id, updateCategoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoresService.remove(+id);
  }
}
