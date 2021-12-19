import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxStringInjectorModule} from 'ngx-string-injector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStringInjectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
