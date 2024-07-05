import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'updUrl',
  standalone: true,
})
export class UpdUrlPipe implements PipeTransform {
  transform(value: string): string {
    value = value ? value : 'uploads/static/1.png';
    return value.includes('uploads/static/') ? environment.urlApi + value : value;
  }
}
