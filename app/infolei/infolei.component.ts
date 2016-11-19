import {Component,Input} from '@angular/core';

@Component({
   moduleId :module.id,
   selector : 'info-lei',
   templateUrl : './infoleicomponent.html',
   styleUrls : ['./infolei.component.css']
})
export class ItemLeiComponent{
   @Input() itensLei:Object[];
}