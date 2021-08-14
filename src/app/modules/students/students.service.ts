import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IStudent } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _http: HttpClient) { }

  localStudents: BehaviorSubject<IStudent[]> = new BehaviorSubject<IStudent[]>([]);

  url = 'http://hp-api.herokuapp.com/api/characters/students';

  getAll(): Observable<IStudent[]> {
    return this._http.get<IStudent[]>(this.url);
  }

  getAllLocal(): Observable<IStudent[]> {
    const students = JSON.parse(localStorage.getItem('students') as string);
    if (!students) {
      localStorage.setItem('students', JSON.stringify([]));
      this.getAllLocal();
    }
    return of(students);
  }

  add(student: IStudent): Observable<IStudent[]> {
    const students = JSON.parse(localStorage.getItem('students') as string);
    if (students) {
      this.localStudents.next(students.push(student));
      localStorage.setItem('students', JSON.stringify(students))
    } else {
      localStorage.setItem('students', JSON.stringify([]));
      this.add(student);
    }
    return of(students);

  }
}
