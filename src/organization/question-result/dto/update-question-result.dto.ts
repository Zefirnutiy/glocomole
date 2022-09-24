import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionResultDto } from './create-question-result.dto';

export class UpdateQuestionResultDto extends PartialType(CreateQuestionResultDto) {}
