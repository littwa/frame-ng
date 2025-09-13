import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
})
export class TextPipe implements PipeTransform {
  transform(value: any): unknown {
    console.log(2, value);
    const { qualify, regard } = value;
    if (!regard || !qualify) return null;
    const stat = qualify.stat.find(v => !v.lapChecked);
    return { qualify, stat, progress: qualify.progress[stat.textId], text: regard.list.find(v => v._id === stat.textId) };
    // return null;
  }
}
