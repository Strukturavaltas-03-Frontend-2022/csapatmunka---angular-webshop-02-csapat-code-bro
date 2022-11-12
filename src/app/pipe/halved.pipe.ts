import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'halved'
})
export class HalvedPipe implements PipeTransform {

  transform(value: number): number {
    value=value/2;
    return value;

    };
}
