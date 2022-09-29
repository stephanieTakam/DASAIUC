import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMECOMPONENT } from './modules/general/home/home.component';
import { QRCodeModule } from 'angular2-qrcode';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DASACOMPONENT } from './modules/general/dasa/dasa.component';
import { ACCEUILCOMPONENT } from './modules/general/acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMECOMPONENT,
    DASACOMPONENT,
    ACCEUILCOMPONENT
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    QRCodeModule, FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    HttpClientModule
  ],
  exports: [
    AppComponent,
    ACCEUILCOMPONENT,
    HOMECOMPONENT,
    DASACOMPONENT
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
