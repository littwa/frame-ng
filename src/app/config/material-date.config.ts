import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: any): string {
    if (displayFormat == 'input') {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      return this._to2digit(day) + '/' + this._to2digit(month) + '/' + year;
    } else {
      return date.toDateString();
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}
