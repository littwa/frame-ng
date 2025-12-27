import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textArray',
})
export class TextArrayPipe implements PipeTransform {
  transform(arr: string[]): string {
    return arr.join(', ');
  }
}
