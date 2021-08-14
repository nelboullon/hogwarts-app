import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navigation } from 'src/app/core/navigation';
import { CharactersComponent } from 'src/app/modules/characters/characters.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { StudentsComponent } from 'src/app/modules/students/students.component';
import { TeachersComponent } from 'src/app/modules/teachers/teachers.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    import('../../modules/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    ),
  },
  {
    path: Navigation.CHARACTERS,
    loadChildren: () =>
      import('../../modules/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: Navigation.STUDENTS,
    loadChildren: () =>
      import('../../modules/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },
  {
    path: Navigation.TEACHERS,
    loadChildren: () =>
      import('../../modules/teachers/teachers.module').then(
        (m) => m.TeachersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HogwartsAppRoutingModule {}
