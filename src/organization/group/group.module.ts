import { Global, Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';

@Global()
@Module({
  controllers: [GroupController],
  providers: [GroupService]
})
export class GroupModule {}
