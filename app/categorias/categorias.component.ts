import {Component} from '@angular/core';

@Component({
   moduleId :module.id,
   selector : 'categorias',
   templateUrl : './categorias.component.html'
})
export class CategoriasComponent{
   categorias:Object[];
   constructor(){
       this.categorias = [
           {
               icon : 'insert_drive_file',
               nome : 'Constituição federal de 1988',
               descricao :'Lei maior brasileira.',
               link : '',
               color : ''
           },
           {
               icon : 'grade',
               nome : 'Leis mais procuradas',
               descricao :'As leis mais procuradas geralmente reflete o que os estudades esão estudando no momento.',
               link : '',
               color : ''
           },
           {
               icon : 'folder',
               nome : 'Código',
               descricao :'Todos as código federias incluindo o novo código civil.',
               link : '',
               color : ''
           },
           {
               icon : 'folder',
               nome : 'Estatuto',
               descricao :'Todos os estatutos federais.',
               link : '',
               color : ''
           },
           {
               icon : 'create_new_folder',
               nome : 'Ultimas Adcionadas',
               descricao :'Veja as novas leis, decretos e leis complemtares aprovados.',
               link : '',
               color : ''
           },
           {
               icon : 'folder',
               nome : 'Leis',
               descricao :'Procure por leis federais desde de 1930',
               link : '',
               color : '#fff',
               background : '#666'
           },
           {
               icon : 'folder',
               nome : 'Leis complemtares',
               descricao :'Procure pelas leis complentares',
               link : '',
               color : ''
           },
           {
               icon : 'folder',
               nome : 'Decreto',
               descricao :'Procure por decreto federais desde de 1930',
               link : '',
               color : ''
           },
           {
               icon : 'folder',
               nome : 'Decretos Leis',
               descricao :'Procure pelos decretos leis vigente na legislatura brasileira',
               link : '',
               color : ''
           },
       ]

   }
}