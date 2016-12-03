import {NgModule,enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { RouterModule }   from '@angular/router';

import {AppComponent} from './app.componet';
import {ItemLeiComponent} from './infolei/infolei.component';
import {NovidadesComponent} from './novidade/novidade.component';
import {CategoriasComponent} from './categorias/categorias.component';
import {HomeComponent} from './home/home.component';

import { MDL } from './directives/MaterialDesignLiteUpgradeElement';

import {TypeLeiPipe} from './pipes/pipes.typelei';
import {TextLimit} from './pipes/pipe.textLimit';
import {NumberPointer} from './pipes/pipe.pointerNumber';


const Routes = RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        children : [
            {
                path: '',
                component: NovidadesComponent
            },
            {
                path: 'categorias',
                component: CategoriasComponent
            },
        ]
      },
      {
        path: '**', 
        redirectTo: ''   
      }
    ])

//enableProdMode();
@NgModule({
   imports : [ BrowserModule, HttpModule,Routes],
   declarations : [
      AppComponent,
      ItemLeiComponent,
      NovidadesComponent,
      CategoriasComponent,
      HomeComponent,

      MDL,

      TypeLeiPipe,
      TextLimit,
      NumberPointer
   ],
   bootstrap : [AppComponent]
})
export class AppModule{}