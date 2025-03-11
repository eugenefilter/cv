import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

import { ExperienceScale } from '../interface';

export class TimeCalculator {
  private currentYear: number;
  private currentMonth: number;

  constructor() {
    // Инициализация текущей даты и месяца
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth() + 1; // Months are zero-based
  }

  calc(startYear: number): ExperienceScale {
    const totalMonthsCurrent = (this.currentYear * 12) + this.currentMonth;
    const totalMonthsStart = (startYear * 12);

    const monthsDifference = totalMonthsCurrent - totalMonthsStart;
    const years = Math.floor(monthsDifference / 12);
    const months = monthsDifference % 12;

    return {
      year: years,
      month: months,
      totalMonth: monthsDifference
    }
  }
}