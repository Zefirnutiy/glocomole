import { PartialType } from '@nestjs/mapped-types';
import { CreatePublicInfoDto } from './create-public-info.dto';

export class UpdatePublicInfoDto extends PartialType(CreatePublicInfoDto) {}
