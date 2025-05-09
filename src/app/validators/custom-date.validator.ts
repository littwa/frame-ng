import { FormControl } from '@angular/forms';

export class CustomDateValidators {
  static dateYYYYMMDD(control: FormControl): { [p: string]: boolean } | null {
    console.log(100000, control.value);
    if (control.value === '' || control.value === null) {
      return null;
    }

    const isDate = /\d{4}-\d{2}-\d{2}/.test(control.value);

    return isDate ? null : { wrongDateYYYYMMDD: true };
  }

  static dateMMDDYYYY(control: FormControl): { [p: string]: boolean } | null {
    if (control.value == '' || control.value == null) {
      return null;
    }

    const isDate = /\d{2}-\d{2}-\d{4}/.test(control.value);

    console.log(100005, control.value, isDate);

    return isDate ? null : { wrongDateYYYYMMDD: true };
  }
}
