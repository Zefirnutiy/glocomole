import { Injectable } from '@nestjs/common';
import { CreateInputTypeDto } from './dto/create-input-type.dto';
import { UpdateInputTypeDto } from './dto/update-input-type.dto';

@Injectable()
export class InputTypeService {
  create(createInputTypeDto: CreateInputTypeDto) {
    return 'This action adds a new inputType';
  }

  findAll() {
    return `This action returns all inputType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inputType`;
  }

  update(id: number, updateInputTypeDto: UpdateInputTypeDto) {
    return `This action updates a #${id} inputType`;
  }

  remove(id: number) {
    return `This action removes a #${id} inputType`;
  }
}
