import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Block1Component } from './block1/block1.component';
import { Module1Module } from './module1/module1.module';

@NgModule({
  declarations: [
    AppComponent,
    Block1Component
  ],
  imports: [
    BrowserModule,
    Module1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
