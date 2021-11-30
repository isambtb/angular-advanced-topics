import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: number, singularLabel: string, pluralLabel: string): unknown {
    return  (value ==  1) ? singularLabel : pluralLabel;
  }

}
