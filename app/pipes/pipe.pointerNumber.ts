import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'numberPointer'})
export class NumberPointer implements PipeTransform {
  transform(value: string): string {
     if(value.length > 3){
        var _pointer = value.length - 3;
        return value.slice(0,_pointer)+'.'+value.slice(_pointer);
     }
     return value;
  }
}