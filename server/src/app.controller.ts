import { Controller, Post, Body } from '@nestjs/common';
import { AnnualFeeService } from './services/annualFee.service';

@Controller()
export class AppController {
  constructor(private readonly annualFeeService: AnnualFeeService) {}

  @Post(`api/feeQuery`)
  getFeePaymentStatus(@Body() body: { name: string }): {
    paid: boolean;
  } {
    return {
      paid: this.annualFeeService.getFeePaymentStatus(body.name),
    };
  }

  @Post(`api/timeline`)
  getTimeline(): { activities: { title: string; date: string }[] } {
    return {
      activities: this.annualFeeService.getTimeline().activities,
    };
  }
}
