import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HogwartsAppComponent } from './layouts/hogwarts-app/hogwarts-app.component';

const routes: Routes = [
  {
    path: '',
    component: HogwartsAppComponent,
    loadChildren: () => import('./layouts/hogwarts-app/hogwarts-app.module').then(m => m.HogwartsAppModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
