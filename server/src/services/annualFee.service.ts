import { Injectable } from '@nestjs/common';

const records = [
  {
    name: 'lyq',
    grade: '2019',
    paid: true,
  },
  {
    name: 'hjw',
    grade: '2019',
    paid: true,
  },
];

@Injectable()
export class AnnualFeeService {
  getFeePaymentStatus(name: string): boolean {
    return records.find((record) => record.name === name)?.paid ?? false;
  }

  getTimeline(): { activities: { title: string; date: string }[] } {
    return {
      activities: records.slice(0, 10).map((record) => ({
        // 名字除去第一位全部变为 *, 例如 lyq 变为 l**
        title: `${record.grade} 级 ${record.name[0] + '*'.repeat(record.name.length - 1)} 缴费成功`,
        date: '2024-01-01',
      })),
    };
  }
}
