import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StudentsService } from './students.service';
import { IStudent } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit, OnDestroy {
  constructor(private _students: StudentsService) {}

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

  data = [] as IStudent[];
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
    this._students
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
