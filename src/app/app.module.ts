import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {initializeLanguage, initializeSupportedLocales} from "./app.initializers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: () => initializeLanguage, multi: true},
    {provide: LOCALE_ID, useFactory: initializeSupportedLocales}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
