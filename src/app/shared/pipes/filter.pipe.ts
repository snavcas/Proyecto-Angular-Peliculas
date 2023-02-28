import { Pipe, PipeTransform } from '@angular/core';
import { Imovies } from '../../core/services/items/items.model'

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {

    transform(value: Imovies[] | null, name: string = ''): Imovies[] {
      if (!value) { return []; }
    
      return value.filter((movies) => {
        return movies.title.toLowerCase().includes(name);
        
      });
    }
    
  
  }
