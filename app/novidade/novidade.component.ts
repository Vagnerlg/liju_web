import {Component,Input} from '@angular/core';

@Component({
   moduleId :module.id,
   selector : 'novidade',
   templateUrl : './novidade.component.html',
   styleUrls : ['./novidade.componet.css']
})
export class NovidadesComponent{
   @Input() novidades = [
      {
         background : 'rgb(96, 125, 139)',
         color : '#fff',
         icon : 'star',
         titulo : 'Liju - Vade Mecum',
         subtitulo : 'Leia as leis federais de forma mais organizada e agradável',
         descricao : 'A Liju esta aqui para te ajudar com os textos de lei seja para estudo daquele concurso público tão esperado ou o exame da OAB ou mesmo consulta rápida das leis de seu interresse.'
      },
      {
         background : 'rgb(245, 124, 0)',
         color : '#fff',
         icon : 'list',
         titulo : 'Títulos e subtitulos',
         subtitulo : 'Acesse a leis e navege por seus títulos e subtitulo e Artigos',
         descricao : 'Todos as leis tem menu lateral com titulos e artigos para ajuda-lo a encontrar os trechos de leis que procura.'
      },
      {
         background : 'rgb(205, 220, 57)',
         color : '#666',
         icon : 'mode_edit',
         titulo : 'Marcações',
         subtitulo : 'Crie e edite marcações nas leis.',
         descricao : 'Faça marcações nos textos da lei como se fosse seu livro porém melhor porque quando a lei for atualizada os trechos que não tiveram modificações não perdem a sua marcação'
      },
      {
         background : 'rgb(0, 188, 212)',
         color : '#333',
         icon : 'insert_comment',
         titulo : 'Comentário',
         subtitulo : 'Crie e edite comentários nas leis e compartilhe para todos seus conhecimentos',
         descricao : 'Os comentários podem ser públicos ou privados assim você escolhe se quer ou não compartilhar seus textos.'
      }
   ]
}