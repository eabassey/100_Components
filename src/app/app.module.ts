import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoaderModule } from './lib/loader.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoaderEffect } from './lib/effects/index';
import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';
import { ThreeModule } from './three/three.module';
import { FourModule } from './four/four.module';
import { TestDirective } from './test.directive';

// Dummy reducer map just for store forRoot
export const reducerMap = {};

@NgModule({
  declarations: [
    AppComponent,
    TestDirective
  ],
  imports: [
    BrowserModule,
    LoaderModule,
    OneModule,
    TwoModule,
    ThreeModule,
    FourModule,
    StoreModule.forRoot(reducerMap),
    EffectsModule.forRoot([LoaderEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
