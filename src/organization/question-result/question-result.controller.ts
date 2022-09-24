import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionResultService } from './question-result.service';
import { CreateQuestionResultDto } from './dto/create-question-result.dto';
import { UpdateQuestionResultDto } from './dto/update-question-result.dto';

@Controller('question-result')
export class QuestionResultController {
  constructor(private readonly questionResultService: QuestionResultService) {}

  @Post()
  create(@Body() createQuestionResultDto: CreateQuestionResultDto) {
    return this.questionResultService.create(createQuestionResultDto);
  }

  @Get()
  findAll() {
    return this.questionResultService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionResultService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionResultDto: UpdateQuestionResultDto) {
    return this.questionResultService.update(+id, updateQuestionResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionResultService.remove(+id);
  }
}
