import { Injectable } from '@nestjs/common';
import { CreateActiveTestDto } from './dto/create-active-test.dto';
import { UpdateActiveTestDto } from './dto/update-active-test.dto';

@Injectable()
export class ActiveTestService {
  create(createActiveTestDto: CreateActiveTestDto) {
    return 'This action adds a new activeTest';
  }

  findAll() {
    return `This action returns all activeTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} activeTest`;
  }

  update(id: number, updateActiveTestDto: UpdateActiveTestDto) {
    return `This action updates a #${id} activeTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} activeTest`;
  }
}
