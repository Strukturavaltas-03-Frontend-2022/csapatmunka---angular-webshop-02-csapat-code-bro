import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'halved'
})
export class HalvedPipe implements PipeTransform {

  transform(value: Product): Product {
    value.price=value.price/2;
    return value;

    };
}
