import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter', pure: false })

export class FilterPipe implements PipeTransform {
    transform(items: any[], args: any): any {
      if(args !== '') {
        return items.filter(item => item.title.toLowerCase().includes(args.toLowerCase()));
      } else {
        return items;
      }
    }
}
