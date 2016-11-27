import {NgModule,enableProdMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.componet';
import {ItemLeiComponent} from './infolei/infolei.component';
import {NovidadesComponent} from './novidade/novidade.component';

import { MDL } from './MaterialDesignLiteUpgradeElement';

import {TypeLeiPipe} from './pipes/pipes.typelei';
import {TextLimit} from './pipes/pipe.textLimit';
import {NumberPointer} from './pipes/pipe.pointerNumber';


//enableProdMode();
@NgModule({
   imports : [ BrowserModule, HttpModule],
   declarations : [
      AppComponent,
      ItemLeiComponent,
      NovidadesComponent,

      MDL,

      TypeLeiPipe,
      TextLimit,
      NumberPointer
   ],
   bootstrap : [AppComponent]
})
export class AppModule{}