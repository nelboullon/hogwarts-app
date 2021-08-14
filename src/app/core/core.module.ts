import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_shared/material/material.module';
import { HttpClientModule } from '@angular/common/http'
import { ComponentsModule } from '../_shared/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ComponentsModule
  ],
  exports: [
    MaterialModule,
    ComponentsModule
  ]
})
export class CoreModule { }
