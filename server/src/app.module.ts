import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnnualFeeService } from './services/annualFee.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AnnualFeeService],
})
export class AppModule {}
