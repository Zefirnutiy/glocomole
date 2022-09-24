import { PartialType } from '@nestjs/mapped-types';
import { CreateFileInformationDto } from './create-file-information.dto';

export class UpdateFileInformationDto extends PartialType(CreateFileInformationDto) {}
