import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StudentsComponent },
  {
    path: 'new',
    component: AddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
