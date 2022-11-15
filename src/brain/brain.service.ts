import { Injectable } from '@nestjs/common';
import { CreateBrainDto } from './dto/create-brain.dto';
import { UpdateBrainDto } from './dto/update-brain.dto';

@Injectable()
export class BrainService {
  create(createBrainDto: CreateBrainDto) {
    return 'This action adds a new brain';
  }

  findAll() {
    return `This action returns all brain`;
  }

  findOne(id: number) {
    return `This action returns a #${id} brain`;
  }

  update(id: number, updateBrainDto: UpdateBrainDto) {
    return `This action updates a #${id} brain`;
  }

  remove(id: number) {
    return `This action removes a #${id} brain`;
  }
}
