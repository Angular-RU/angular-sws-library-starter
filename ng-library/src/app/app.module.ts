import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
// import {SwsLoadingModule} from "sws-loading"; // Из npm
import {SwsLoadingModule} from '../../libs/sws-loading/src/sws-loading.module'; // Локальный модуль

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SwsLoadingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
