import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';
import { Product } from '../model/product';

@Pipe({
  name: 'catId'
})
export class CatIdPipe implements PipeTransform {

  transform(value: Product): Product {

      switch (value.catId) {
        case 1: value.catId="western";
        break;
        case 2: value.catId="drama";
        break;
        case 3: value.catId="krimi";
        break;
        case 4: value.catId="akció";
        break;
        case 5: value.catId="thriller";
        break;

        default:
          value.catId="ismeretlen";
        break;
          }

          return value;
    };

}
