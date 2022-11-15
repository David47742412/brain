import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrainService } from './brain.service';
import { CreateBrainDto } from './dto/create-brain.dto';
import { UpdateBrainDto } from './dto/update-brain.dto';

@Controller('brain')
export class BrainController {
  constructor(private readonly brainService: BrainService) {}

  @Post()
  create(@Body() createBrainDto: CreateBrainDto) {
    return this.brainService.create(createBrainDto);
  }

  @Get()
  findAll() {
    return this.brainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brainService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrainDto: UpdateBrainDto) {
    return this.brainService.update(+id, updateBrainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brainService.remove(+id);
  }
}
