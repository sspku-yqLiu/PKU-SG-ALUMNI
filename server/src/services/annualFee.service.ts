import { Injectable } from '@nestjs/common';

const records = [
  {
    name: 'lyq',
    entryYear: '2019',
    paid: true,
  },
  {
    name: 'hjw',
    entryYear: '2019',
    paid: true,
  },
];

@Injectable()
export class AnnualFeeService {
  getFeePaymentStatus({ name, year }: { name: string; year: string }): boolean {
    return (
      records.find(
        (record) => record.name === name && record.entryYear === year,
      )?.paid ?? false
    );
  }

  getTimeline(): { activities: { title: string; date: string }[] } {
    return {
      activities: records.slice(0, 10).map((record) => ({
        // 名字除去第一位全部变为 *, 例如 lyq 变为 l**
        title: `${record.entryYear} 级 ${record.name[0] + '*'.repeat(record.name.length - 1)} 缴费成功`,
        date: '2024-01-01',
      })),
    };
  }
}
