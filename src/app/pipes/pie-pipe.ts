import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pie',
})
export class PiePipe implements PipeTransform {
  transform(value: { text: any; qualify: any }): string {
    console.log(7777, value);
    console.log(value.qualify.progress[value.text._id], value.qualify.repeat);
    console.log(value.qualify.progress[value.text._id] / value.qualify.repeat);
    return Math.round((value.qualify.progress[value.text._id] / value.qualify.repeat) * 100) + '%';
  }
}
