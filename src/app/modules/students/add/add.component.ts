import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IStudent } from '../student.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private _students: StudentsService, private fb: FormBuilder) {}

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

  data = [] as IStudent[];
  columnHeader = {
    name: 'Name',
    patronus: 'Patronus',
    yearOfBirth: 'Age',
  };

  studentForm!: FormGroup;

  loading = true;
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.subscribeToEvents();
    this.formInit();
  }

  subscribeToEvents(): void {
    this._students
      .getAllLocal()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.data = res;
        this.loading = false;
      });
  }

  formInit(): void {
    this.studentForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern('^[a-z0-9_-]{8,15}$')],
      ],
      patronus: [
        '',
        [Validators.required, Validators.pattern('^[a-z0-9_-]{8,15}$')],
      ],
      yearOfBirth: [
        '',
        [
          Validators.required,
          Validators.maxLength(4),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
    });
  }

  addStudent() {
    this._students
      .add(this.studentForm.value)
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
