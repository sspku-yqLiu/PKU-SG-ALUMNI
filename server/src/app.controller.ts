import { Controller, Post, Body, Get } from '@nestjs/common';
import { AnnualFeeService } from './services/annualFee.service';

@Controller()
export class AppController {
  constructor(private readonly annualFeeService: AnnualFeeService) {}

  @Get('api/hello')
  getHello(): string {
    return 'Hello World';
  }

  @Post(`api/feeQuery`)
  getFeePaymentStatus(@Body() body: { name: string; year: string }): {
    paid: boolean;
  } {
    const res = {
      paid: this.annualFeeService.getFeePaymentStatus(body),
    };

    return res;
  }

  @Post(`api/timeline`)
  getTimeline(): { activities: { title: string; date: string }[] } {
    const res = {
      activities: this.annualFeeService.getTimeline().activities,
    };

    return res;
  }
}
