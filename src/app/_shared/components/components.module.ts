import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsSliderComponent } from './cards-slider/cards-slider.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';
import { AgePipe } from 'src/app/core/pipes/age.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardsSliderComponent,
    TableComponent,
    AgePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CardsSliderComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
