import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeacher } from './teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private _http: HttpClient) { }

  url = 'http://hp-api.herokuapp.com/api/characters/staff';

  getAll(): Observable<ITeacher[]> {
    return this._http.get<ITeacher[]>(this.url);
  }
}
