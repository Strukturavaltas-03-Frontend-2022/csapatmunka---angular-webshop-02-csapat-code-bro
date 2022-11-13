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

    let featuredMoviesall: Product[] = [];
    let featuredMovies: Product[] = [];
    value.forEach((movie) => {
      if (movie.featured === true) {
        featuredMoviesall.push(movie);
      }
    });
    for (let index = 0; index < 5; index++) {
      let randomize = Math.floor(Math.random()*featuredMoviesall.length);
      featuredMovies.push(featuredMoviesall[randomize])
    }
    return featuredMovies;
  }
}
