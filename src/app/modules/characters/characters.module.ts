import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CoreModule } from 'src/app/core/core.module';
import { CharactersService } from './characters.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CoreModule,
    FormsModule
  ],
  providers: [CharactersService]
})
export class CharactersModule { }
