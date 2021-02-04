import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Block2Component } from './block2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Block2Component],
  exports: [Block2Component],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class Module1Module { }
