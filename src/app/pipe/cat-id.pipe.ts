import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catId'
})
export class CatIdPipe implements PipeTransform {

  transform(value: number): string {

      switch (value) {
        case 1: return "western";

        case 2:  return "drama";

        case 3: return "krimi";

        case 4: return "akció";

        case 5: return "thriller";


        default:
          return "ismeretlen";

          }

    };

}
