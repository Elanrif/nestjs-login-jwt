import { Test, TestingModule } from '@nestjs/testing';
import { CategoresController } from './categores.controller';
import { CategoresService } from './categores.service';

describe('CategoresController', () => {
  let controller: CategoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoresController],
      providers: [CategoresService],
    }).compile();

    controller = module.get<CategoresController>(CategoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
