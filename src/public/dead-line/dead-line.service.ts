import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeadLineDto } from './dto/create-dead-line.dto';
import { UpdateDeadLineDto } from './dto/update-dead-line.dto';
import { DeadLine } from './entities/dead-line.entity';

@Injectable()
export class DeadLineService {
  constructor(@InjectRepository(DeadLine) private readonly deadLineRepository: Repository<DeadLine>){}
  create(createDeadLineDto: CreateDeadLineDto) {
    return 'This action adds a new deadLine';
  }

  findAll() {
    return `This action returns all deadLine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deadLine`;
  }

  update(id: number, updateDeadLineDto: UpdateDeadLineDto) {
    return `This action updates a #${id} deadLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} deadLine`;
  }
}
