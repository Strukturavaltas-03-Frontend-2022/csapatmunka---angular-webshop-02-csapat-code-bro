import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'universalsearch',
})
export class UniversalsearchPipe implements PipeTransform {
  transform(
    value: any[] | null,
    key: string,
    phrase: string | number | boolean
  ): any[] | null {
    if (!Array.isArray(value) || !key || !phrase) {
      return value;
    }

    phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;

    return value.filter((item) => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      }

      return ('' + item[key]).toLowerCase().includes(phrase as string);
    });
  }
}
