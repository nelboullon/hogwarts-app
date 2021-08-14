import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HogwartsAppRoutingModule } from './hogwarts-app-routing.module';
import { HogwartsAppComponent } from './hogwarts-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    HogwartsAppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HogwartsAppRoutingModule,
    CoreModule
  ]
})
export class HogwartsAppModule { }
