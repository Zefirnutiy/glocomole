import { Injectable } from '@nestjs/common';
import { CreateDeadLineDto } from './dto/create-dead-line.dto';
import { UpdateDeadLineDto } from './dto/update-dead-line.dto';

@Injectable()
export class DeadLineService {
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
