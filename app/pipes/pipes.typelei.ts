import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'typeLei'})
export class TypeLeiPipe implements PipeTransform {
  transform(value: string): string {
     if(value == 'd'){
        return 'Decreto';
     }
     if(value == 'lo'){
        return 'Lei';
     }
     if(value == 'lc'){
        return 'Lei Complementar';
     }
     if(value == 'dl'){
        return 'Decreto Lei';
     }
     if(value == 'cf'){
        return 'Constituição Federal';
     }
    return value;
  }
}