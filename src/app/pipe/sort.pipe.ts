import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})

export class SortPipe<T extends { [x: string]: any }> implements PipeTransform {

  transform(value: T[], header: string): T[] {
    if (!Array.isArray(value) || !header) {
      return value;
    }
    header = header.toLowerCase();
    console.log(header);
    return value.sort((a, b) => {

      return String(a[header]).localeCompare(String(b[header]));

    });
  }
}
