import { Global, Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Global()
@Module({
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
