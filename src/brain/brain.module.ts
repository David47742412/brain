import { Module } from '@nestjs/common';
import { BrainService } from './brain.service';
import { BrainController } from './brain.controller';

@Module({
  controllers: [BrainController],
  providers: [BrainService]
})
export class BrainModule {}
