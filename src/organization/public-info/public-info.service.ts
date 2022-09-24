import { Injectable } from '@nestjs/common';
import { CreatePublicInfoDto } from './dto/create-public-info.dto';
import { UpdatePublicInfoDto } from './dto/update-public-info.dto';

@Injectable()
export class PublicInfoService {
  create(createPublicInfoDto: CreatePublicInfoDto) {
    return 'This action adds a new publicInfo';
  }

  findAll() {
    return `This action returns all publicInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publicInfo`;
  }

  update(id: number, updatePublicInfoDto: UpdatePublicInfoDto) {
    return `This action updates a #${id} publicInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicInfo`;
  }
}
