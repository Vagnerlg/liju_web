import {Component} from '@angular/core';
import {Http,RequestOptions} from '@angular/http';

@Component({
   moduleId : module.id,
   selector : 'my-app',
   templateUrl : './app.componet.html',
})

export class AppComponent{

   itensLei:Object[] = [];

   constructor(http: Http,contenct:RequestOptions){
      contenct.headers.set('content-type','application/x-www-form-urlencoded');
      let observer = http.post('http://api.liju.com.br/v2/infolei/ultimas','token=946e8b81550f74434a04d4293a0a36c9');
      observer.subscribe(response => {
         this.itensLei = response.json().response.data;
         console.log(response.json().response.data);
      },error =>{
         console.log(error);
      });
   }

}