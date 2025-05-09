import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unix',
})
export class UnixPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    // console.log(+value * 1000);

    const options: any = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    return new Date(+value).toLocaleString('de-DE', options);
  }
}
