import { Global, Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Global()
@Module({
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
