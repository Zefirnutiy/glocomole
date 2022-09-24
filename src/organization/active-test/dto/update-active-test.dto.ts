import { PartialType } from '@nestjs/mapped-types';
import { CreateActiveTestDto } from './create-active-test.dto';

export class UpdateActiveTestDto extends PartialType(CreateActiveTestDto) {}
