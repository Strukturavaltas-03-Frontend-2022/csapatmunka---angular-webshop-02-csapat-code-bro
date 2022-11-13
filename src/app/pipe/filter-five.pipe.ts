import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'filterFive',
})
export class FilterFivePipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(value: Product[]): any[] {
    if (!Array.isArray(value)) {
      return value;
    }

    let featuredMovies: Product[] = [];

    value.forEach((movie) => {
      if (movie.featured === true) {
        featuredMovies.push(movie);
      }
    });

    return featuredMovies.slice(0, 5);
  }
}
