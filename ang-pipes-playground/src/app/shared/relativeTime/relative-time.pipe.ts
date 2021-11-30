import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(seconds: number): string {
    if ( seconds < 30){
      return 'a few seconds ago';
    } else if ( seconds < 60){
      return 'less then a minute ago';
    } else if ( seconds < 120){
      return 'a minute ago';
    } else if ( seconds < 120){
      return 'a minute ago';
    } else if ( seconds < 240){
      return 'a few minutes ago';
    } else if ( seconds < 3600){
      return Math.floor(seconds / 60) + ' minutes ago';
    } else if ( seconds < 7200){
      return 'an hour ago';
    }
    return "more than an hour ago";
  }

}
