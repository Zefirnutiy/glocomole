import { Injectable } from '@nestjs/common';
import { CreateQuestionResultDto } from './dto/create-question-result.dto';
import { UpdateQuestionResultDto } from './dto/update-question-result.dto';

@Injectable()
export class QuestionResultService {
  create(createQuestionResultDto: CreateQuestionResultDto) {
    return 'This action adds a new questionResult';
  }

  findAll() {
    return `This action returns all questionResult`;
  }

  findOne(id: number) {
    return `This action returns a #${id} questionResult`;
  }

  update(id: number, updateQuestionResultDto: UpdateQuestionResultDto) {
    return `This action updates a #${id} questionResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} questionResult`;
  }
}
