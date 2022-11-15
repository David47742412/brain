import { PartialType } from '@nestjs/mapped-types';
import { CreateBrainDto } from './create-brain.dto';

export class UpdateBrainDto extends PartialType(CreateBrainDto) {}
