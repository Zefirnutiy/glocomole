import { PartialType } from '@nestjs/mapped-types';
import { CreateDeadLineDto } from './create-dead-line.dto';

export class UpdateDeadLineDto extends PartialType(CreateDeadLineDto) {}
