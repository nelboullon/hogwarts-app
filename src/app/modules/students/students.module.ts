import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { CoreModule } from 'src/app/core/core.module';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentsComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StudentsModule { }
