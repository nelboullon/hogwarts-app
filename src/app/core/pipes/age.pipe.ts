import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: number): string {
    const actualYear = Number(new Date().getFullYear());
    return `${actualYear - value} YO`;
  }
}
