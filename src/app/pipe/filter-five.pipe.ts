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
      console.log('üres');
      return value;
    }


    let featuredMoviesAll: Product[] = [];
    let featuredMovies: Product[] = [];
    let randomize=0

    value.forEach((movie) => {
      if (movie.featured === true) {
        featuredMoviesAll.push(movie);
      }
    });

    while (featuredMovies.length<5) {
     randomize = Math.floor(Math.random()*featuredMoviesAll.length);


      (featuredMovies.findIndex(movie=> movie.id===featuredMoviesAll[randomize].id)===-1) ?
      featuredMovies.push(featuredMoviesAll[randomize]) :null;

    }
    return featuredMovies;
  }
}
