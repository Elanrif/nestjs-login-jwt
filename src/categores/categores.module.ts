import { Module } from '@nestjs/common';
import { CategoresService } from './categores.service';
import { CategoresController } from './categores.controller';

@Module({
  controllers: [CategoresController],
  providers: [CategoresService],
})
export class CategoresModule {}
