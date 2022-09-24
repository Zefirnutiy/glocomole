import { Global, Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';

@Global()
@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService]
})
export class OrganizationModule {}
