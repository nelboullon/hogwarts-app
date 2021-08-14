import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TeachersService } from './teachers.service';
import { ITeacher } from './teacher.model';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  constructor(private _teachers: TeachersService) {}

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

  data = [] as ITeacher[];
  columnHeader = {
    image: 'Image',
    name: 'Name',
    patronus: 'Patronus',
    yearOfBirth: 'Age',
  };

  loading = true;

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.subscribeToEvents();
  }

  subscribeToEvents(): void {
    this._teachers
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.data = res;
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
